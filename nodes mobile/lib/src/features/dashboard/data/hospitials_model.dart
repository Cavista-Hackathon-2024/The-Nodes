class HospitalsResponse {
  int status;
  String message;
  List<Hospital> data;

  HospitalsResponse({
    required this.status,
    required this.message,
    required this.data,
  });

  // Factory constructor to create the object from JSON
  factory HospitalsResponse.fromJson(Map<String, dynamic> json) {
    return HospitalsResponse(
      status: json['status'],
      message: json['message'],
      data: (json['data'] as List)
          .map((hospitalJson) => Hospital.fromJson(hospitalJson))
          .toList(),
    );
  }
}

class Hospital {
  String hospitalId;
  String name;
  String location;
  String specialties;
  List<Doctor> doctors;
  String priceRange;
  Contact contact;

  Hospital({
    required this.hospitalId,
    required this.name,
    required this.location,
    required this.specialties,
    required this.doctors,
    required this.priceRange,
    required this.contact,
  });

  factory Hospital.fromJson(Map<String, dynamic> json) {
    return Hospital(
      hospitalId: json['hospitalId'],
      name: json['name'],
      location: json['location'],
      specialties: json['specialties'],
      doctors: (json['doctors'] as List)
          .map((doctorJson) => Doctor.fromJson(doctorJson))
          .toList(),
      priceRange: json['priceRange'],
      contact: Contact.fromJson(json['contact']),
    );
  }
}

class Doctor {
  String name;
  String specialization;

  Doctor({
    required this.name,
    required this.specialization,
  });

  factory Doctor.fromJson(Map<String, dynamic> json) {
    return Doctor(
      name: json['name'],
      specialization: json['specialization'],
    );
  }
}

class Contact {
  String phone;
  String email;
  String website;

  Contact({
    required this.phone,
    required this.email,
    required this.website,
  });

  factory Contact.fromJson(Map<String, dynamic> json) {
    return Contact(
      phone: json['phone'],
      email: json['email'],
      website: json['website'],
    );
  }
}
