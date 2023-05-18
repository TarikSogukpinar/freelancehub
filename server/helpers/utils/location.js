import geoip from "geoip-lite";

const isObject = (value) => {
  return value && typeof value === "object" && value.constructor === Object;
};

export const getLocationInformation = async (ip) => {
  try {
    const getLocationInformation = await geoip.lookup(ip);

    return getLocationInformation;
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true, message: error.message });
  }
};
