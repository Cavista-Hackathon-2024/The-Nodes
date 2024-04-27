import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:the_nodes_heathcare/src/component/btn.dart';
import 'package:the_nodes_heathcare/src/component/text_input.dart';

class SigninScreen extends ConsumerStatefulWidget {
  const SigninScreen({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _SigninScreenState();
}

class _SigninScreenState extends ConsumerState<SigninScreen> {
  bool obscureText = false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 10),
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
              const SizedBox(
                height: 30,
              ),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    TextInputField(
                        controller: TextEditingController(),
                        hintText: 'FirstName'),
                    SizedBox(
                      height: 20,
                    ),
                    TextInputField(
                        controller: TextEditingController(),
                        hintText: 'LastName'),
                    SizedBox(
                      height: 20,
                    ),
                    TextInputField(
                        controller: TextEditingController(),
                        hintText: 'email@gmai.com'),
                    SizedBox(
                      height: 20,
                    ),
                    TextInputField(
                        controller: TextEditingController(),
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
                        controller: TextEditingController(),
                        hintText: 'phoneNumber'),
                    SizedBox(
                      height: 20,
                    ),
                    TextInputField(
                        controller: TextEditingController(),
                        hintText: 'Location'),
                    SizedBox(
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
                        onPressed: () {},
                        child: Text(
                          'Sign Up',
                          style: TextStyle(color: Colors.white, fontSize: 20),
                        ))
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
