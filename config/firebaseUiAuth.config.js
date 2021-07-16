
export const uiConfig = firebase => ({
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    tosUrl: '/tos',
    privacyPolicyUrl: '/privacy',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
})
