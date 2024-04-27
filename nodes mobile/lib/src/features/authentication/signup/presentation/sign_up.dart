// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:the_nodes_heathcare/src/component/text_input.dart';
import 'package:the_nodes_heathcare/src/features/authentication/signin/presentation/sign_in.dart';
import 'package:the_nodes_heathcare/src/services/repository/auth_repo.dart';

class SignupScreen extends ConsumerStatefulWidget {
  const SignupScreen({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _SignupScreenState();
}

class _SignupScreenState extends ConsumerState<SignupScreen> {
  bool obscureText = false;
  final firstController = TextEditingController();
  final lastController = TextEditingController();
  final mailController = TextEditingController();
  final passController = TextEditingController();
  final phoneController = TextEditingController();
  final locationController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final authrepo = ref.watch(authbaseProvider);

    return MaterialApp(
      home: Scaffold(
        // resizeToAvoidBottomInset: false,
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
          child: SizedBox(
            height: MediaQuery.of(context).size.height,
            child: SafeArea(
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 20),
                child: Column(
                  children: [
                    Image.asset(
                      'assets/images/node_image.png',
                      height: 56,
                      width: 52,
                    ),
                    const Text(
                      'Create A Free Account',
                      style: TextStyle(fontSize: 20, color: Color(0xFF10191C)),
                      textAlign: TextAlign.center,
                    ),
                    SizedBox(
                      height: 5,
                    ),
                    const Text(
                      'Get started with NodeHealth! Create a FREE account in seconds.',
                      style: TextStyle(fontSize: 14, color: Color(0xFF10191C)),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          TextInputField(
                              controller: firstController,
                              hintText: 'FirstName'),
                          SizedBox(
                            height: 20,
                          ),
                          TextInputField(
                              controller: lastController, hintText: 'LastName'),
                          SizedBox(
                            height: 20,
                          ),
                          TextInputField(
                              controller: mailController,
                              hintText: 'email@gmai.com'),
                          SizedBox(
                            height: 20,
                          ),
                          TextInputField(
                              controller: passController,
                              hintText: 'Password',
                              obscureText: obscureText,
                              suffix: GestureDetector(
                                onTap: () {
                                  setState(() {
                                    obscureText = !obscureText;
                                  });
                                },
                                child: Icon(obscureText
                                    ? Icons.visibility
                                    : Icons.visibility_off),
                              )),
                          SizedBox(
                            height: 20,
                          ),
                          TextInputField(
                              controller: phoneController,
                              hintText: 'phoneNumber'),
                          SizedBox(
                            height: 20,
                          ),
                          TextInputField(
                              controller: locationController,
                              hintText: 'Location'),
                          const SizedBox(
                            height: 30,
                          ),
                          ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                backgroundColor: const Color(0xFF04B6F7),
                                fixedSize: const Size(400, 60),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                              ),
                              onPressed: () async {
                                await authrepo.signUp(context,
                                    email: mailController.text.trim(),
                                    password: passController.text.trim(),
                                    firstName: firstController.text.trim(),
                                    lastName: lastController.text.trim(),
                                    phoneNumber: phoneController.text.trim(),
                                    location: locationController.text.trim());
                              },
                              child: const Text(
                                'Sign Up',
                                style: TextStyle(
                                    color: Colors.white, fontSize: 20),
                              )),
                          SizedBox(
                            height: 20,
                          ),
                          ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                // backgroundColor: const Color(0xFF04B6F7),
                                fixedSize: const Size(400, 60),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                              ),
                              onPressed: () {
                                Navigator.of(context).push(MaterialPageRoute(
                                    builder: (context) => SigninScreen()));
                              },
                              child: const Text(
                                'Sign In',
                                style: TextStyle(
                                    color: Color(0xFF04B6F7), fontSize: 20),
                              ))
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
