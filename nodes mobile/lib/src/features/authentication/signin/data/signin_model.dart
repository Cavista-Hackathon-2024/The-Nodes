class LoginResponse {
  String? message;
  int? status;
  Data? data;

  LoginResponse({this.message, this.status, this.data});

  factory LoginResponse.fromJson(Map<String, dynamic> json) {
    return LoginResponse(
        message: json['message'],
        status: json['status'],
        data: json['data'] != null ? Data.fromJson(json['data']) : null);
  }
}

class Data {
  String? token;
  User? user;

  Data({this.token, this.user});

  factory Data.fromJson(Map<String, dynamic> json) {
    return Data(
        token: json['token'],
        user: json['user'] != null ? User.fromJson(json['user']) : null);
  }


}

class User {
  String? email;
  String? firstName;
  String? lastName;

  User({this.email, this.firstName, this.lastName});

  User.fromJson(Map<String, dynamic> json) {
    email = json['email'];
    firstName = json['firstName'];
    lastName = json['lastName'];
  }
}
