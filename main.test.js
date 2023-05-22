const { expect, describe, it } = require("@jest/globals");
const { studentPortal, getSubjects, getCredits } = require("./main");

describe("studentPortal", () => {
    describe("When the student is not registered in the system", () => {
        it("Returns error message 'Mahasiswa tidak terdaftar'", () => {
            expect(studentPortal("2008210164")).toBe(
                "Mahasiswa tidak terdaftar"
            );
            expect(studentPortal("2022220004")).toBe(
                "Mahasiswa tidak terdaftar"
            );
            expect(studentPortal("2018520090")).toBe(
                "Mahasiswa tidak terdaftar"
            );
        });
    });

    describe("When the student is no longer active", () => {
        it("Returns an error message s`tating that the student is no longer active and their id", () => {
            expect(studentPortal("2010310164")).toBe(
                "Mahasiswa dengan id 2010310164 sudah tidak aktif"
            );
            expect(studentPortal("2012320055")).toBe(
                "Mahasiswa dengan id 2012320055 sudah tidak aktif"
            );
            expect(studentPortal("2012330004")).toBe(
                "Mahasiswa dengan id 2012330004 sudah tidak aktif"
            );
        });
    });

    describe("When a student is registered in the system and is still active", () => {
        it("Returns student data that has been completed with GPA and courses taken", () => {
            let test1 = studentPortal("2012330080");
            let test2 = studentPortal("2010320181");
            let test3 = studentPortal("2011320100");

            let result1 = [
                { subjectName: "Ilmu Politik", credit: 3, status: "wajib" },
                { subjectName: "Ilmu Ekonomi", credit: 3, status: "wajib" },
                { subjectName: "Kepemimpinan", credit: 3, status: "wajib" },
                { subjectName: "Sosiologi", credit: 3, status: "wajib" },
                {
                    subjectName: "Teori Pengambil keputusan",
                    credit: 3,
                    status: "wajib",
                },
                { subjectName: "Statistika", credit: 3, status: "wajib" },
                { subjectName: "Aplikasi IT", credit: 3, status: "pilihan" },
                { subjectName: "Etika", credit: 2, status: "pilihan" },
                { subjectName: "Estetika", credit: 1, status: "pilihan" },
            ];
            let result2 = [
                { subjectName: "Ilmu Politik", credit: 3, status: "wajib" },
                { subjectName: "Ilmu Ekonomi", credit: 3, status: "wajib" },
                { subjectName: "Kepemimpinan", credit: 3, status: "wajib" },
                { subjectName: "Sosiologi", credit: 3, status: "wajib" },
                {
                    subjectName: "Teori Pengambil keputusan",
                    credit: 3,
                    status: "wajib",
                },
            ];
            let result3 = [
                { subjectName: "Ilmu Politik", credit: 3, status: "wajib" },
                { subjectName: "Ilmu Ekonomi", credit: 3, status: "wajib" },
                { subjectName: "Kepemimpinan", credit: 3, status: "wajib" },
                { subjectName: "Sosiologi", credit: 3, status: "wajib" },
                {
                    subjectName: "Teori Pengambil keputusan",
                    credit: 3,
                    status: "wajib",
                },
                { subjectName: "Statistika", credit: 3, status: "wajib" },
            ];

            expect(test1.name).toBe("Dea Christy Keliat");
            expect(test1.credits).toBe(24);
            expect(test1.subjects.length).toBe(9);
            expect(test1.subjects).toEqual(expect.arrayContaining(result1));

            expect(test2.name).toBe("Edizon");
            expect(test2.credits).toBe(15);
            expect(test2.subjects.length).toBe(5);
            expect(test2.subjects).toEqual(expect.arrayContaining(result2));

            expect(test3.name).toBe("Hikman Nurahman");
            expect(test3.credits).toBe(18);
            expect(test3.subjects.length).toBe(6);
            expect(test3.subjects).toEqual(expect.arrayContaining(result3));
        });
    });
});

describe("getSubjects", () => {
    describe("When students can take as many as 24 credits", () => {
        it("Returns all registered courses", () => {
            let result = [
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
            expect(getSubjects(24)).toEqual(expect.arrayContaining(result));
        });
    });

    describe("When students can take as many as 21 credits", () => {
        it("return all compulsory courses and elective courses with the largest number of credits", () => {
            let result = [
                { subjectName: "Ilmu Politik", credit: 3, status: "wajib" },
                { subjectName: "Ilmu Ekonomi", credit: 3, status: "wajib" },
                { subjectName: "Kepemimpinan", credit: 3, status: "wajib" },
                { subjectName: "Sosiologi", credit: 3, status: "wajib" },
                {
                    subjectName: "Teori Pengambil keputusan",
                    credit: 3,
                    status: "wajib",
                },
                { subjectName: "Statistika", credit: 3, status: "wajib" },
                { subjectName: "Aplikasi IT", credit: 3, status: "pilihan" },
            ]
            expect(getSubjects(21)).toEqual(expect.arrayContaining(result));
        });
    });

    describe("When students can take as many as 18 credits", () => {
        it("return only all required courses", () => {
            let result = [
                { subjectName: "Ilmu Politik", credit: 3, status: "wajib" },
                { subjectName: "Ilmu Ekonomi", credit: 3, status: "wajib" },
                { subjectName: "Kepemimpinan", credit: 3, status: "wajib" },
                { subjectName: "Sosiologi", credit: 3, status: "wajib" },
                {
                    subjectName: "Teori Pengambil keputusan",
                    credit: 3,
                    status: "wajib",
                },
                { subjectName: "Statistika", credit: 3, status: "wajib" },
            ]
            expect(getSubjects(21)).toEqual(expect.arrayContaining(result));
        });
    });
});

describe("getCredits", () => {
    describe("when a student has a GPA of more than equal to 3", () => {
        it("returns the credit score that a student can take up to 24", () => {
            expect(getCredits(3)).toBe(24);
            expect(getCredits(3.5)).toBe(24);
            expect(getCredits(3.9)).toBe(24);
        });
    });

    describe("when a student has a GPA of more than or equal to 2.5 and less than 3", () => {
        it("returns the credit score that a student can take up to 21", () => {
            expect(getCredits(2.5)).toBe(21);
            expect(getCredits(2.75)).toBe(21);
            expect(getCredits(2.89)).toBe(21);
        });
    });

    describe("when a student has a GPA of more than equal to 2 and less than 2.5", () => {
        it("returns the credit score that a student can take up to 18", () => {
            expect(getCredits(2)).toBe(18);
            expect(getCredits(2.1)).toBe(18);
            expect(getCredits(2.43)).toBe(18);
        });
    });

    describe("when a student has a GPA of more than or equal to 1.5 and less than 2", () => {
        it("returns the credit score that a student can take up to 15", () => {
            expect(getCredits(1.5)).toBe(15);
            expect(getCredits(1.66)).toBe(15);
            expect(getCredits(1.95)).toBe(15);
        });
    });

    describe("when a student has a GPA of more than or equal to 0 and less than 1.5", () => {
        it("returns the credit score that a student can take up to 12", () => {
            expect(getCredits(0.75)).toBe(12);
            expect(getCredits(0)).toBe(12);
            expect(getCredits(1.49)).toBe(12);
        });
    });
});
