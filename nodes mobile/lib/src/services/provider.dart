import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'repository/auth_repo.dart';

final hospitalProvider = FutureProvider((ref) async {
  final hospitalService = ref.watch(authbaseProvider);
  final subjects = await hospitalService.getHosspitals();
  return subjects;
});
