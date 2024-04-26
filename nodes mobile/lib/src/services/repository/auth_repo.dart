import 'dart:convert';

import 'package:the_nodes_heathcare/src/services/repository/auth_base.dart';

import '../api_service.dart';


class AuthRespository implements AuthBase {
  var baseUrl = HttpService(
      'https://the-nodes.onrender.com/api/v1');
  @override
  Future signIn({required String email, required String password}) async {
    final req = await baseUrl.post(endpoint: 'auth/login', header: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    }, data: {
      "email": email,
      "password": password
    });
      final data = jsonDecode(req.body);
    try {

    } catch (e) {
      print(e);
    }
  }
  @override
  Future signUp({required String email, required String password, required String firstName, required String lastName}) async {
    final req = await baseUrl.post(endpoint: 'auth/login', header: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    }, data: {
      "email": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName
    });
      final data = jsonDecode(req.body);
    try {

    } catch (e) {
      print(e);
    }
  }
}
