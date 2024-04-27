// ignore_for_file: must_be_immutable

import 'package:flutter/material.dart';

// ignore: must_be_immutable
class OnBoardingButton extends StatelessWidget {
  OnBoardingButton({super.key, required this.onPressed, required this.btnTxt});
  VoidCallback onPressed;
  String? btnTxt;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: const Color(0xFF04B6F7),
        fixedSize: const Size(380, 50),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
        ),
      ),
      onPressed: onPressed,
      child: Text(
        btnTxt ?? 'Next',
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w600,
          color: Colors.white,
        ),
      ),
    );
  }
}

class OnBoardingButton1 extends StatelessWidget {
  OnBoardingButton1({super.key, required this.onPressed, required this.btnTxt});
  VoidCallback onPressed;
  String? btnTxt;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: TextButton.styleFrom(
        // backgroundColor: const Color(0xFF04B6F7),
        fixedSize: const Size(335, 50),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
        ),
      ),
      onPressed: onPressed,
      child: Text(
        btnTxt ?? 'Skip',
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w600,
          color: const Color(0xFF04B6F7),
        ),
      ),
    );
  }
}
