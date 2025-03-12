const awsAmplifyConfig = {
  Auth: {
    region: "ap-south-1", // AWS region
    userPoolId: "ap-south-1_ONVWdistg", // Your User Pool ID
    userPoolWebClientId: "13461g0792vdpt24efau9ng1q0", // Your App Client ID
    oauth: {
      domain: "cogtrangile.auth.ap-south-1.amazoncognito.com", // Cognito domain
      scope: ["email", "openid", "profile"], // OAuth scopes
      redirectSignIn: "http://localhost:3000", // Redirect URL after sign-in
      redirectSignOut: "http://localhost:3000", // Redirect URL after sign-out
      responseType: "token", // Response type for OAuth (e.g., "token" or "code")
    },
  },
};

Amplify.configure(awsAmplifyConfig);
