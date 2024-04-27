import 'package:flutter/material.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:the_nodes_heathcare/src/component/btn.dart';
import 'package:the_nodes_heathcare/src/component/text_input.dart';
import 'package:the_nodes_heathcare/src/services/repository/auth_repo.dart';

class SigninScreen extends ConsumerStatefulWidget {
  const SigninScreen({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _SigninScreenState();
}

class _SigninScreenState extends ConsumerState<SigninScreen> {
  bool obscureText = false;
  @override
  Widget build(BuildContext context) {
    final authrepo = ref.watch(authbaseProvider);
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.symmetric(horizontal: 10, vertical: 40),
          child: Column(
            children: [
              Image.asset(
                'assets/images/node_image.png',
                height: 56,
                width: 52,
              ),
              const Text(
                'Welcome Back!',
                style: TextStyle(fontSize: 20, color: Color(0xFF10191C)),
                textAlign: TextAlign.center,
              ),
              const Text(
                'Log in back to your account.',
                style: TextStyle(fontSize: 16, color: Color(0xFF10191C)),
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
                        onPressed: () {},
                        child: Text(
                          'Sign In',
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
