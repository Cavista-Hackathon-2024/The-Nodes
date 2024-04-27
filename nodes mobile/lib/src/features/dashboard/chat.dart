import 'package:flutter/material.dart';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}
// ...

class _ChatScreenState extends State<ChatScreen> {
  final _textController = TextEditingController();
  final _focusNode = FocusNode();

  void _sendMessage() {
    if (_textController.text.isNotEmpty) {
      // Retrieve the message from _textController.text
      // Process the message (e.g., send it via a websocket)

      _textController.clear(); // Clear the input field
      _focusNode.unfocus(); // Optionally remove focus
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: const Text(
        'Chat Bot Screen',
        textAlign: TextAlign.center,
      )),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
                // Placeholder for message display
                itemCount: 0, // Update this for a real chat
                itemBuilder: (context, index) => Text('Message $index')),
          ),
          Container(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _textController,
                    focusNode: _focusNode,
                    decoration:
                        const InputDecoration(hintText: 'Type your message'),
                  ),
                ),
                IconButton(
                  icon: Icon(Icons.send),
                  onPressed: _sendMessage,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
