// ignore_for_file: prefer_const_constructors, avoid_unnecessary_containers, prefer_const_constructors_in_immutables

import 'package:flutter_gen/gen_l10n/app_localizations.dart';

import 'package:flutter/material.dart';
import 'package:the_nodes_heathcare/src/component/btn.dart';

int _currentPage = 0;
final PageController _pageController = PageController();

class GenOnboard extends StatefulWidget {
  const GenOnboard({Key? key}) : super(key: key);

  @override
  _GenOnboardState createState() => _GenOnboardState();
}

class _GenOnboardState extends State<GenOnboard> {
  final PageController _pageController = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(fit: StackFit.loose, children: [
        PageView(
          // physics: NeverScrollableScrollPhysics(),
          controller: _pageController,
          onPageChanged: (int page) {
            setState(() {
              _currentPage = page;
            });
          },
          children: [
            OnboardCustom(
                title: AppLocalizations.of(context)!.onboardtxt1,
                description: AppLocalizations.of(context)!.onboardtxt2,
                image: 'assets/images/banner1.png'),
            OnboardCustom(
                title: AppLocalizations.of(context)!.onboardtxt11,
                description: AppLocalizations.of(context)!.onboardtxt12,
                image: 'assets/images/banner2.png'),
            OnboardCustom(
                title: AppLocalizations.of(context)!.onboardtxt22,
                description: AppLocalizations.of(context)!.onboardtxt13,
                image: 'assets/images/banner3.png')
          ],
        ),
        Container(
          margin: EdgeInsets.only(bottom: 20),
          child: Align(
            alignment: Alignment.bottomCenter,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(
                      3,
                      (index) => Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: Container(
                              width: index == _currentPage ? 12 : 12,
                              height: 8,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10),
                                color: index == _currentPage
                                    ? Color(0xFF10191C)
                                    : Colors.grey,
                                // shape: BoxShape.circle,
                              ),
                            ),
                          )),
                ),
                SizedBox(
                  height: 3,
                ),
                OnBoardingButton(
                    onPressed: () {
                      if (_currentPage < 2) {
                        _pageController.nextPage(
                          duration: Duration(milliseconds: 300),
                          curve: Curves.easeInOut,
                        );
                      }
                    },
                    btnTxt: 'Next'),
                OnBoardingButton1(
                    btnTxt: 'Skip',
                    onPressed: () {
                      if (_currentPage < 2) {
                        _pageController.nextPage(
                          duration: Duration(milliseconds: 300),
                          curve: Curves.easeInOut,
                        );
                      }
                    }),
              ],
            ),
          ),
        )
      ]),
    );
  }
}

class OnboardCustom extends StatefulWidget {
  OnboardCustom({super.key, this.title, this.description, this.image});
  final String? title;
  final String? description;
  final String? image;

  @override
  State<OnboardCustom> createState() => _OnboardCustomState();
}

class _OnboardCustomState extends State<OnboardCustom> {
  @override
  Widget build(BuildContext context) {
    return Stack(fit: StackFit.expand, children: [
      Container(
        alignment: Alignment.center,
        decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage(
                widget.image!,
              ),
              fit: BoxFit.fitWidth),
        ),
      ),
      Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          padding: EdgeInsets.symmetric(vertical: 10, horizontal: 10),
          height: 340,
          // width: 375,
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30), topRight: Radius.circular(30))),
          child: Column(
            children: [
              Text(
                widget.title!,
                style: TextStyle(
                  fontSize: 25,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(
                height: 10,
              ),
              Text(
                widget.description!,
                style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.normal,
                  color: Colors.grey,
                ),
                textAlign: TextAlign.center,
              ),
            ],
          ),
        ),
      ),
    ]);
  }
}
