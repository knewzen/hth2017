const credentials = process.env.PRODUCTION ? {
  'clientId': 'BBD45C7D97278D9C66E53CB3CE9AFDB72B5E6CBA80602FBA57EA9279303BE06E',
  'clientSecret': '287B4E9B19F9365EB62C9B319ACBCE9DD087D1AD08F330BA17185E0B58FBB55A',
} : {
  "clientId": "93D057758E777E7625D168775028F3BDF79FE631E599588796487DA932B7E1C9",
  "clientSecret": "8E5F4597BBAC54A9AC8D227F69D21E2B0C409061B37846B1FA98B3745203FAF1",
};

module.exports = credentials;