// ignore_for_file: implementation_imports, depend_on_referenced_packages

import 'package:flutter/material.dart';
import 'package:flutter_localizations/src/material_localizations.dart';
import 'package:flutter_localizations/src/cupertino_localizations.dart';
import 'package:the_nodes_heathcare/l10n/l10n.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:the_nodes_heathcare/src/features/dashboard/dash_board.dart';

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
      home: const MyHomePage(title: 'Cavista'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  void initState() {
    Future.delayed(const Duration(seconds: 5), () {
      Navigator.pushReplacement(
          context, 
          MaterialPageRoute(builder: (context) => const HomeScreen())
      );
    });
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    
    return  Scaffold(
      backgroundColor: Colors.black,
        body: Center(
      child: Text(
        AppLocalizations.of(context)!.language,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 30,
          fontWeight: FontWeight.bold,
        ),
      ),
    ));
  }
}

