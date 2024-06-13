import {Alert, BackHandler, ScrollView, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import commonStyle from '../../styles/commonStyles.tsx';

import appImages from '../../assets/index.tsx';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader.tsx';

import {APP_NAME} from '../../utils/appConstants.tsx';
import NoDataFound from '../../components/NoDataFound.tsx';
import BottomNavBar from '../../navigation/BottomNavBar.tsx';
import handleRequest from '../../api/handleRequest.tsx';
import {GET_DUMMY_DATA} from '../../api/Endpoints.tsx';

const LandingScreen = () => {
  const settings = useSelector((state: any) => state?.settings);

  const appThemes = settings?.appThemes;
  const commonStyles = commonStyle(appThemes);
  const doubleBackToExitPressedOnce = useRef<boolean>(false);

  const [data, setdata] = useState<any>(false);

  const loadData = async () => {
    try {
      handleRequest(GET_DUMMY_DATA)
        .then(response => {
          setdata(response);
        })
        .catch(error => {
          setdata([]);
          console.log(error);
        });
    } catch (error) {
      setdata([]);
      console.log(error, 'ERROR');
    }
  };
  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={commonStyles.responsiveCont}>
      <View style={commonStyles.fullCont}>
        {data ? (
          Array.isArray(data) && data.length > 0 ? (
            <View style={{marginTop: 10, marginBottom: 10}}>
              <ScrollView>
                {data.map((el, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        width: '95%',
                        padding: 10,
                        backgroundColor: appThemes.LIGHT_THEME,
                        alignSelf: 'center',
                        marginBottom: 10,
                        borderWidth: 1,
                        borderColor: appThemes.TEXT_COLOR,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          color: appThemes.TEXT_COLOR,
                          fontWeight: 'bold',
                        }}>
                        {el?.title}
                      </Text>
                      <Text style={{color: '#ccc'}}>{el?.body}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          ) : (
            <NoDataFound />
          )
        ) : (
          <Loader />
        )}
      </View>
    </View>
  );
};

export default LandingScreen;
