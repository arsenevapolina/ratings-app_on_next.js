// module.exports = {
//   webpack(config) {
//     config.module.rules.pusg({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
