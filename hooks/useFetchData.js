import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { firebaseConfig } from "../utils/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const STORAGE_FIRSTIME = "@save_firstTime";
  
  useEffect(() => {
    if (firebase.apps.length) return
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();
    const dbRef = firestore.collection(`dataBank`).doc("data/");
      const fetchData = async () => {
        try {
            const valFirstTime = await AsyncStorage.getItem(STORAGE_FIRSTIME);
            if (valFirstTime != null) {
              dbRef.get().then((doc) => {
                  if(doc.exists) {
                     setData(doc.data())
                  } else {
                      console.log('No existe información en la base de datos');
                  }
              }).catch((error) => {
                  console.log(error);
              })
            } else {
              const response = await fetch(
                `https://api.jsonbin.io/b/5ea2fa3e98b3d5375233ca89`
              );
              const dataBank = await response.json();
              setData({dataBank})
              await dbRef.set({ dataBank });
              await AsyncStorage.setItem(STORAGE_FIRSTIME, true);
            }
          } catch (error) {
            console.log(error);
          }
      }
    fetchData()
  }, [])
  return [data];
};

export default useFetchData;
