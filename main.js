function process_argv() {
    const { argv } = process;
    const result = studentPortal(argv[2]);

    return result;
}

function studentPortal(studentId) {
    const studentList = [
        {
            id: "2010310164",
            name: "Rakanda Pangeran Nasution",
            gpa: 2.65,
            status: false,
        },
        {
            id: "2011310021",
            name: "Yosef Noferianus Gea",
            gpa: 3.1,
            status: true,
        },
        {
            id: "2014310100",
            name: "Angelia",
            gpa: 1.25,
            status: true,
        },
        {
            id: "2011320090",
            name: "Dito Bagus Prasetio",
            gpa: 2.75,
            status: true,
        },
        {
            id: "2011320100",
            name: "Hikman Nurahman",
            gpa: 2.45,
            status: true,
        },
        {
            id: "2010320181",
            name: "Edizon",
            gpa: 1.95,
            status: true,
        },
        {
            id: "2012320055",
            name: "Marrisa Stella",
            gpa: 3.5,
            status: false,
        },
        {
            id: "2012330080",
            name: "Dea Christy Keliat",
            gpa: 3,
            status: true,
        },
        {
            id: "2013330049",
            name: "Sekarini Mahyaswari",
            gpa: 3.5,
            status: true,
        },
        {
            id: "2012330004",
            name: "Yerica",
            gpa: 3.15,
            status: false,
        },
    ];
    
    const students = studentList.find((students) => students.id == studentId);
    // const gpaStudent = students.gpa
    if(!students){
        return `Mahasiswa tidak terdaftar`;
    }
    
    let credits = getCredits(students.gpa);
    let subjects = getSubjects(credits);

    
    if (!students.status){
        return `Mahasiswa dengan id ${studentId} sudah tidak aktif`;
    }else {
        return {
            id: students.id,
            name: students.name,
            gpa: students.gpa,
            credits,
            subjects
        }
    }
}

function getCredits(gpa) {
    let sks = "";

    if(gpa > 2.99){
        sks = 24;
    }else if(gpa >= 2.5 && gpa <= 2.99){
        sks = 21;
    }else if(gpa >= 2 && gpa <= 2.49){
        sks = 18;
    }else if(gpa >= 1.5 && gpa <= 1.99){
        sks = 15;
    }else if(gpa >= 0 && gpa <= 1.49){
        sks = 12;
    }

    return sks;
}

function getSubjects(credits) {
    const subjectsList = [
        {
            subjectName: "Ilmu Politik",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Ilmu Ekonomi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Estetika",
            credit: 1,
            status: "pilihan",
        },
        {
            subjectName: "Kepemimpinan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Etika",
            credit: 2,
            status: "pilihan",
        },
        {
            subjectName: "Sosiologi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Teori Pengambil keputusan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Statistika",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Aplikasi IT",
            credit: 3,
            status: "pilihan",
        },
    ];
    
      // Filter mata kuliah wajib
    const subjectWajib = subjectsList.filter((subject) => subject.status === "wajib");

    // Urutkan mata kuliah wajib berdasarkan urutan yang diberikan
    const urutanSubjectsWajib = [
    "Ilmu Politik",
    "Ilmu Ekonomi",
    "Kepemimpinan",
    "Sosiologi",
    "Teori Pengambil keputusan",
    "Statistika",
    ].map((subjectName) =>
      subjectWajib.find((subject) => subject.subjectName === subjectName)
    ).filter((subject) => subject);

    // Filter mata kuliah pilihan
    const subjectPilihan = subjectsList.filter((subject) => subject.status === "pilihan");

    // Urutkan mata kuliah pilihan berdasarkan credit
    const urutanSubjectsPilihan = subjectPilihan.sort((a, b) => b.credit - a.credit);

    const subjects = [];

    // Ambil semua mata kuliah wajib
    urutanSubjectsWajib.forEach((subject) => {
        if (credits >= subject.credit) {
            subjects.push(subject);
            credits -= subject.credit;
        }
    });

    // Ambil mata kuliah pilihan jika mata kuliah wajib sudah diambil semua
    if (credits > 0) {
        urutanSubjectsPilihan.forEach((subject) => {
            if (credits >= subject.credit) {
                subjects.push(subject);
                credits -= subject.credit;
            }
        });
    }
    
  return subjects;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentPortal,
    getSubjects,
    getCredits,
};
