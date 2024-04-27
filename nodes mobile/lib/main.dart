// ignore_for_file: implementation_imports, depend_on_referenced_packages

import 'package:flutter/material.dart';
import 'package:flutter_localizations/src/material_localizations.dart';
import 'package:flutter_localizations/src/cupertino_localizations.dart';
import 'package:the_nodes_heathcare/l10n/l10n.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:the_nodes_heathcare/src/features/authentication/signin/presentation/sign_in.dart';
import 'package:the_nodes_heathcare/src/features/authentication/signup/presentation/sign_up.dart';
import 'package:the_nodes_heathcare/src/features/onboarding/presentation/widget/onboard1.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'The Nodes',
        theme: ThemeData(
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
          useMaterial3: true,
        ),
        supportedLocales: L10n.supportedLocales,
        localizationsDelegates: const [
          AppLocalizations.delegate,
          GlobalMaterialLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
        ],
        home: const SigninScreen());
  }
}

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  // @override
  // void initState() {
  //   Future.delayed(const Duration(seconds: 5), () {
  //     Navigator.pushReplacement(
  //         context,
  //         MaterialPageRoute(builder: (context) => const HomeScreen())
  //     );
  //   });
  //   super.initState();
  // }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.white,
        body: Center(
            child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // const SizedBox(height: 200,),
            Image.asset(
              'assets/images/node_image.png',
              width: 80,
              height: 74.2,
            ),
            const SizedBox(
              height: 10,
            ),
            Image.asset(
              'assets/images/node_logo.png',
              height: 48,
              width: 179,
            ),
          ],
        )
            // child: Text(
            // AppLocalizations.of(context)!.language,
            //   style: const TextStyle(
            //     color: Colors.white,
            //     fontSize: 30,
            //     fontWeight: FontWeight.bold,
            //   ),
            // ),
            ));
  }
}
