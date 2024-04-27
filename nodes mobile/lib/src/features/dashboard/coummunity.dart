// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:the_nodes_heathcare/src/component/text_input.dart';

class CommunutiyScreen extends StatefulWidget {
  const CommunutiyScreen({super.key});

  @override
  State<CommunutiyScreen> createState() => _CommunutiyScreenState();
}

class _CommunutiyScreenState extends State<CommunutiyScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: 30),
      child: SafeArea(
        child: Column(children: [
          TextInputField1(
              controller: TextEditingController(),
              hintText: 'Find patients with similar diseases...',
              suffix: Icon(
                Icons.search,
              )),
          SizedBox(
            height: 10,
          ),
          Expanded(
            child: ListView.builder(
                itemCount: _peopleModel.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    leading: Image.asset(
                      'assets/images/pic.png',
                      width: 40,
                      height: 40,
                    ),
                    title: Text(_peopleModel[index].name),
                    subtitle: Text(_peopleModel[index].diseaseName),
                    trailing: Icon(Icons.more_vert),
                  );
                }),
          )
        ]),
      ),
    ));
  }
}

class PeopleModel {
  String name;
  String diseaseName;
  PeopleModel({required this.name, required this.diseaseName});
}

List<PeopleModel> _peopleModel = [
  PeopleModel(name: "Doe", diseaseName: "Diagnosed of Sickle Cell"),
  PeopleModel(name: "John", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Emilly", diseaseName: "Diagnosed of Sickle Cell"),
  PeopleModel(name: "Susan", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Emilly", diseaseName: "Diagnosed of Sickle Cell"),
  PeopleModel(name: "Susan", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Ayo", diseaseName: "Diagnosed of Sickle Cell"),
  PeopleModel(name: "Kola", diseaseName: "Diagnosed of Sickle Cell"),
  PeopleModel(name: "Chinedu", diseaseName: "Diagnosed of Sickle Cell"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
  PeopleModel(name: "Bola", diseaseName: "Diagnosed of haemophilia"),
];
