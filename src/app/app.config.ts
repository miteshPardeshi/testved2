import { environment } from '../environments/environment';

export class AppConfig {
    public static HOST_URL: string = environment.HOST_URL;

    // ...Common error messages...
    public static unauthorized = "You are not authorize to access this panel.";
    public static something_wrong = "Something is wrong. Please try after sometime!";
    public static server_error = "Server error! Please try after sometime!";

    public static mainLoginURL: string = window.location.origin + '#/login';

    public static authority_role_business_user: string = "1: 'ROLE_BUSINESS_USER'";
    public static mapKey = "AIzaSyCCcLyxGWfOEkCjs-dWcP6LBs2GQ1WU8zo";
    // Account...
    public static loginURl: string = AppConfig.HOST_URL + 'api/authenticate';
    public static accountURL: string = AppConfig.HOST_URL + 'api/account';
    public static changePasswordURL: string = AppConfig.HOST_URL + 'api/riders/changePassword';
    public static resetPasswordUrl: string = AppConfig.HOST_URL + 'api/account/reset_password/finish_admin';
    public static resetUserPasswordUrl: string = AppConfig.HOST_URL + 'api/account/reset_password/finish';
    public static activeUrl: string = AppConfig.HOST_URL + 'api/activate';
    public static forgetPassword: string = AppConfig.HOST_URL + 'api/account/forgotPassword';
    public static registerURL: string = AppConfig.HOST_URL + 'api/register';


    //Dashboard
    public static getSuperAdminDashboard: string = AppConfig.HOST_URL + 'api/superAdminDashboard';
}