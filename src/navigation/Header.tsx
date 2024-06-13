import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import headStyles from '../styles/nav/headerStyles';
import appImages from '../assets/index';
import GetIcon from '../components/GetIcon';
import SideMenu from './SideMenu';
import {navigate} from './RootNav';
import {useSelector} from 'react-redux';
import {DARK_THEME} from '../utils/appThemes';
import {APP_NAME} from '../utils/appConstants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const settings = useSelector((state: any) => state?.settings);
  const appThemes = settings?.appThemes;

  const headerStyles = headStyles(appThemes);

  const toggleMenu = React.useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <View
      style={{
        ...headerStyles.headerCont,
      }}>
      <View style={headerStyles.headerInCont}>
        <Modal transparent={true} animationType="none" visible={menuOpen}>
          <SideMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </Modal>
        <View style={headerStyles.lhsCont}>
          <TouchableOpacity
            onPress={() => {
              navigate('LandingScreen');
            }}>
            <Image
              source={appImages.APP_LOGO}
              style={headerStyles.appLogo}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View>
            <Text style={headerStyles.appHeadName}>{APP_NAME}</Text>
            {/* <Text style={headerStyles.appVersion}>v2.0</Text> */}
          </View>
        </View>

        <TouchableOpacity
          onPress={toggleMenu}
          style={{alignSelf: 'flex-start', marginTop: 15}}>
          <GetIcon
            iconName={'menu-open'}
            iconSize={35}
            iconFamily="MaterialCommunityIcons"
            iconColor={appThemes.TEXT_COLOR}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Header);
