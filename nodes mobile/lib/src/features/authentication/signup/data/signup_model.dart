class RegistrationResponse {
  String? message;
  int? status;
  Data? data;

  RegistrationResponse({this.message, this.status, this.data});

  factory RegistrationResponse.fromJson(Map<String, dynamic> json) {
    return RegistrationResponse(
        message: json['message'],
        status: json['status'],
        data: json['data'] != null ? Data.fromJson(json['data']) : null);
  }
}
class Data {
  String? email;

  Data({this.email});

  Data.fromJson(Map<String, dynamic> json) {
    email = json['email'];
  }
}
