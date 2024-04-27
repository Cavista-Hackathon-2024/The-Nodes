// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:the_nodes_heathcare/src/component/text_input.dart';

class DashBoardScreen extends StatefulWidget {
  const DashBoardScreen({super.key});

  @override
  State<DashBoardScreen> createState() => _DashBoardScreenState();
}

class _DashBoardScreenState extends State<DashBoardScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: 30),
      child: SafeArea(
        child: Column(children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Image.asset(
                    'assets/images/pic.png',
                  ),
                  SizedBox(
                    width: 10,
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'John Doe',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text('How’s your health today?',
                          style:
                              TextStyle(fontSize: 16, color: Color(0XFF878787)))
                    ],
                  ),
                ],
              ),
              Icon(
                Icons.notifications_outlined,
                size: 30,
              )
            ],
          ),
          SizedBox(
            height: 20,
          ),
          TextInputField1(
              controller: TextEditingController(),
              hintText: 'Find patients with similar diseases...',
              suffix: Icon(
                Icons.search,
              )),
          SizedBox(
            height: 10,
          ),
          SizedBox(
            height: 20,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Nearby Hospitals',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                Text(
                  'See All',
                  style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: const Color(0xFF04B6F7)),
                )
              ],
            ),
          ),
          Expanded(
            child: ListView.builder(
                padding: EdgeInsets.all(0),
                itemCount: _hospitalModel.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    leading: Image.asset(
                      _hospitalModel[index].image,
                      // width: 100,
                      // height: 80,
                    ),
                    title: Text(_hospitalModel[index].name),
                    subtitle: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('${_hospitalModel[index].diseaseName} - '),
                        Text(_hospitalModel[index].location),
                      ],
                    ),
                    trailing: Icon(Icons.more_vert),
                  );
                }),
          )
        ]),
      ),
    ));
  }
}

class HospitalModel {
  String image;
  String name;
  String location;
  String diseaseName;
  HospitalModel(
      {required this.image,
      required this.name,
      required this.location,
      required this.diseaseName});
}

List<HospitalModel> _hospitalModel = [
  HospitalModel(
      image: 'assets/images/bed1.png',
      name: 'Life Saver Hospital',
      location: 'Abule-Egba',
      diseaseName: 'Haemophilia'),
  HospitalModel(
      image: 'assets/images/bed1.png',
      name: 'The Nodes',
      location: 'Abule-Egba',
      diseaseName: 'SKala-azar'),
  HospitalModel(
      image: 'assets/images/bed2.png',
      name: 'Life Saver Hospital',
      location: 'Abule-Egba',
      diseaseName: 'lassa fever'),
  HospitalModel(
      image: 'assets/images/bed2.png',
      name: 'Nodes Health',
      location: 'Abule-Egba',
      diseaseName: 'Loa loa filariasis'),
  HospitalModel(
      image: 'assets/images/bed2.png',
      name: 'Life Saver Hospital',
      location: 'Abule-Egba',
      diseaseName: 'Haemophilia'),
  HospitalModel(
      image: 'assets/images/bed1.png',
      name: 'Life Saver Hospital',
      location: 'Abule-Egba',
      diseaseName: 'Loa loa filariasis'),
];
