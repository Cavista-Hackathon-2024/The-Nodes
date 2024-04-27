// ignore_for_file: use_build_context_synchronously

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:the_nodes_heathcare/src/features/authentication/signin/presentation/sign_in.dart';
import 'package:the_nodes_heathcare/src/features/authentication/signup/data/signup_model.dart';
import 'package:the_nodes_heathcare/src/features/dashboard/data/hospitials_model.dart';
import 'package:the_nodes_heathcare/src/services/repository/auth_base.dart';

import '../api_service.dart';

class AuthRespository extends ChangeNotifier implements AuthBase {
  var baseUrl = HttpService('https://the-nodes.onrender.com/api/v1/');
  @override
  Future signIn(BuildContext context,
      {required String email, required String password}) async {
    final req = await baseUrl.post(endpoint: 'auth/login', header: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    }, data: {
      "email": email,
      "password": password
    });
    final data = jsonDecode(req.body);
    try {
      if (req.statusCode == 200) {
        final response = RegistrationResponse.fromJson(data);
        if (response.status == 200) {
          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) => const SigninScreen()));
        }
      }
    } catch (e) {
      print(e);
    }
  }

  @override
  Future signUp(BuildContext context,
      {required String email,
      required String password,
      required String firstName,
      required String lastName,
      required String location,
      required String phoneNumber}) async {
    final req = await baseUrl.post(endpoint: 'auth/register', header: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    }, data: {
      "email": email,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "location": location,
      "phone": phoneNumber
    });
    final data = jsonDecode(req.body);
    try {
      if (req.statusCode == 201) {
        print(data);
        final response = RegistrationResponse.fromJson(data);
        if (response.status == 201) {
          Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (context) => const SigninScreen()));
        }
      }
    } catch (e) {
      print(e);
    }
  }
  @override
  Future getHosspitals() async {
    final req = await baseUrl.get(endpoint: 'app/hospitals/all', header: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    });
    final data = jsonDecode(req.body);
    try {
      if (req.statusCode == 200) {
        final hospitals = HospitalsResponse.fromJson(data);
        return hospitals.data;
      }
    } catch (e) {
      print(e);
    }
  }
}

final authbaseProvider = Provider<AuthBase>((ref) => AuthRespository());
