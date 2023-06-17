import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",
//   },
//   headers: {
//     "X-RapidAPI-Key": "b02747e69fmsh8ee26d86f43c736p1ded30jsnfca394330bc6",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };

export const getPlacesData = async (bounds) => {
  try {
    // console.log("index bound:", bounds);
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: bounds.sw.lat,
        tr_latitude: bounds.ne.lat,
        bl_longitude: bounds.sw.lng,
        tr_longitude: bounds.ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "b02747e69fmsh8ee26d86f43c736p1ded30jsnfca394330bc6",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
