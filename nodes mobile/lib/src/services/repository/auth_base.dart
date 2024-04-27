import 'package:flutter/material.dart';

abstract class AuthBase {
  Future signIn(BuildContext context,
      {required String email, required String password});

  Future signUp(BuildContext context,
      {required String email,
      required String password,
      required String firstName,
      required String lastName,
      required String location,
      required String phoneNumber});
  Future getHosspitals();
}
