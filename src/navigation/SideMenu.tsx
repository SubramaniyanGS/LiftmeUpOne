import {View, Text, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import React, {FC, Fragment, useRef, useState} from 'react';
import headStyles from '../styles/nav/headerStyles';
import GetIcon from '../components/GetIcon';
import {Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {handleLogout} from '../utils/helperFunctions';

import FullSizeBtn from '../components/AppButton';
import {useSelector} from 'react-redux';
import store from '../redux/store';
import {MENU_OPTIONS} from '../utils/appConstants';

interface SideMenuProps {
  toggleMenu?: any;
  menuOpen?: boolean;
}
const SideMenu: FC<SideMenuProps> = ({toggleMenu, menuOpen}) => {
  const slideAnim = useRef<any>(new Animated.Value(500)).current;
  const navigation = useNavigation<any>();
  const settings = useSelector((state: any) => state?.settings);
  const user: any = store.getState().user;
  const appThemes = settings?.appThemes;

  const headerStyles = headStyles(appThemes);

  const menuOptions: any =
    Array.isArray(user?.decodedToken?.permissions) &&
    user?.decodedToken?.permissions.includes('admin:manage:salesorg')
      ? MENU_OPTIONS
      : MENU_OPTIONS.filter(item => item.routeName !== 'SalesOrg');

  const menuRefs = menuOptions.map(() => {
    return React.useRef<any>(new Animated.Value(500)).current;
  });
  const [logoutPopUp, setLogoutPopUp] = useState<boolean>(false);

  const handleAnim = React.useCallback((ref: any) => {
    Animated.timing(ref, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleAnimation = React.useCallback(() => {
    if (menuOpen) {
      handleAnim(slideAnim);
      menuOptions.forEach((menu: any, i: number) => {
        setTimeout(() => {
          handleAnim(menuRefs[i]);
        }, i * 75);
      });
    } else {
      handleAnim(slideAnim);
    }
  }, []);

  React.useEffect(() => {
    handleAnimation();
  }, []);
  return (
    <SafeAreaView style={headerStyles.sideMenuCont}>
      <Modal
        transparent={true}
        animationType="none"
        visible={logoutPopUp}
        onRequestClose={toggleMenu}
        onDismiss={toggleMenu}>
        <SafeAreaView style={headerStyles.logoutCont}>
          <View style={headerStyles.logoutInCont}>
            <Text style={headerStyles.logoutText}>
              Are you sure, you want to logout ?
            </Text>
            <View style={headerStyles.loginBtnsCont}>
              <View style={{width: '40%'}}>
                <FullSizeBtn
                  btnTitleStyle={{fontSize: 14}}
                  btnTitle="No"
                  btnStyles={{height: 25}}
                  onPress={() => setLogoutPopUp(false)}
                  btnColor={appThemes.GREY}
                />
              </View>
              <View style={{width: '40%'}}>
                <FullSizeBtn
                  btnTitle="Yes"
                  btnStyles={{height: 25}}
                  btnTitleStyle={{fontSize: 14}}
                  onPress={() => {
                    toggleMenu();
                    setLogoutPopUp(false);
                    handleLogout();
                  }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      <View style={headerStyles.sideMenuInCont}>
        <TouchableOpacity
          onPress={toggleMenu}
          style={headerStyles.sideRhsMenuCont}>
          {/* <TouchableOpacity
            onPress={() => toggleMenu()}
            style={{ marginTop: 20, marginRight: 10 }}
          >
            <GetIcon
              iconName={"menu"}
              iconSize={35}
              iconFamily="MaterialCommunityIcons"
            />
          </TouchableOpacity> */}
        </TouchableOpacity>
        <View style={headerStyles.sideLhsMenuCont}>
          <View style={headerStyles.sideMenuProfCont}>
            <Text style={headerStyles.welcomeHead}>Welcome</Text>
            <Text style={headerStyles.profileName}>Name !</Text>
          </View>
          {menuOptions.map((menuOpt: any, i: number) => {
            return (
              <Fragment key={i}>
                <Animated.View
                  style={[
                    {
                      width: '100%',
                      transform: [
                        {
                          translateX: i > 0 ? menuRefs[i] : slideAnim,
                        },
                      ],
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      if (menuOpt?.menuName === 'Logout') {
                        setLogoutPopUp(true);
                      } else {
                        toggleMenu(false);
                        navigation.navigate(menuOpt?.routeName);
                      }
                    }}
                    style={headerStyles.singleSideMenu}>
                    <GetIcon
                      iconSize={20}
                      iconFamily={menuOpt?.iconFamily}
                      iconName={menuOpt?.iconName}
                      iconStyles={headerStyles.sideMenuIconStyles}
                    />
                    <Text style={headerStyles.sideMenuTitle}>
                      {menuOpt?.menuName}
                    </Text>
                  </TouchableOpacity>
                </Animated.View>
              </Fragment>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SideMenu);