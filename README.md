# Student Portal

## Final Project

### Description

Pada _final project_ kali ini kalian diminta untuk membuat program untuk melihat data _student_ yang terdaftar beserta berapa jumlah SKS & mata kuliah apa saja yang dapat di ambil oleh _student_ tersebut.

Pada _final project_ ini, kalian di berikan beberapa _function_ dengan penamaan sesuai dengan kegunaannya, antara lain:

1. `studentPortal` : _function_ utama yang akan memanggil _function_ lainnya.
2. `getCredits` : _function_ yang dapat kalian gunakan untuk menghitung jumlah SKS yang diperoleh _student_.
3. `getSubjects` : _function_ yang dapat kalian gunakan untuk menentukan mata kuliah apa saja yang dapat di peroleh setiap _student_.

Terdapat juga function `process_argv` yang akan menerima _input_ yang kalian masukan pada terminal.

> Kalian tidak perlu mengubah atau mengerjakan apa pun pada function `process_argv`

Berikut ini format input pada terminal yang wajib kalian ikuti untuk menjalankan program yang dibuat:

```txt
node main.js "studentId"
```

contoh

```bash
node main.js "2000210002"
```

### `studentPortal`

_Function_ `studentPortal` menerima 1 buah parameter berupa `studentId` dimana _value_ dari parameter tersebut berbentuk `string`.

Pada _function_ ini terdapat _data_ dalam _variable_ `studentList` (bertipe _data_ `array of objects`) yang mana beberapa _data_ tersebut berisikan _data_ _student_ yang terdaftar. Setiap elemen dalam `array` marupakan sebuah `object` yang berisikan informasi dari setiap _student_ mulai dari `id`, `name`, `gpa`, dan `status`.

| Name     | Data Type |
| -------- | --------- |
| _id_     | string    |
| _name_   | string    |
| _gpa_    | integer   |
| _status_ | boolean   |

```js
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
        ...
    ];
```

Kalian diminta untuk melakukan beberapa hal, antara lain:

1. Jika `id` yang diterima dalam parameter tidak terdaftar pada _variable_ `studentList`, maka akan mengembalikan pesan _error_ berupa `Mahasiswa tidak terdaftar`.
2. Jika `id` yang diterima dalam parameter terdaftar namun status _student_ bernilai `false`, maka akan menampikan pesan _error_ berupa `Mahasiswa dengan id <Id Student> sudah tidak aktif`.
3. Jika `id` yang diterima dalam parameter terdaftar namun status _student_ bernilai `true`, maka perogram akan mengembalikan _data_ _student_ yang sudah ditambahkan _data_ _credits_ yang dimiliki dan _subjects_ apa saja yang dapat di ambil _student_ tersebut dengan format berikut:

    | Name       | Data Type        |
    | ---------- | ---------------- |
    | _id_       | string           |
    | _name_     | string           |
    | _gpa_      | integer          |
    | _credits_  | integer          |
    | _subjects_ | array of objects |

    ```txt
    {
      id: <id student>,
      name: <nama student>,
      gpa: <ip yang dimiliki student>,
      credits: <jumlah sks yang didapat>,
      subjects: <mata kuliah apa saja yang dapat diambil student>
    }
    ```

> Hints: Gunakanlah 2 function lainnya untuk mendapatkan data credits dan subjects.

#### Test Case 1

**Input**:

```js
// studentPortal(studentId)
studentPortal("2018770090");
```

**Expected Output / Behavior**:

```txt
"Mahasiswa tidak terdaftar"
```

#### Test Case 2

**Input**:

```js
// studentPortal(studentId)
studentPortal("2010310164");
```

**Expected Output / Behavior**:

```txt
"Mahasiswa dengan id 2010310164 sudah tidak aktif"
```

#### Test Case 3

**Input**:

```js
// studentPortal(studentId)
studentPortal("2012330080");
```

**Expected Output / Behavior**:

```js
{
  id: '2012330080',
  name: 'Dea Christy Keliat',
  gpa: 3,
  credits: 24,
  subjects: [
    { subjectName: 'Ilmu Politik', credit: 3, status: 'wajib' },
    { subjectName: 'Ilmu Ekonomi', credit: 3, status: 'wajib' },
    { subjectName: 'Kepemimpinan', credit: 3, status: 'wajib' },
    { subjectName: 'Sosiologi', credit: 3, status: 'wajib' },
    {
      subjectName: 'Teori Pengambil keputusan',
      credit: 3,
      status: 'wajib'
    },
    { subjectName: 'Statistika', credit: 3, status: 'wajib' },
    { subjectName: 'Aplikasi IT', credit: 3, status: 'pilihan' },
    { subjectName: 'Etika', credit: 2, status: 'pilihan' },
    { subjectName: 'Estetika', credit: 1, status: 'pilihan' }
  ]
}
```

### `getCredits`

_Function_ `getCredits` menerima 1 buah parameter berupa `gpa` dimana _value_ dari parameter tersebut berbentuk `integer`. Kalian diminta untuk menghitung jumlah SKS yang didapat oleh _student_ dengan ketentuan berikut:

-   Jika GPA > 2.99 dapat mengambil 24 SKS
-   Jika GPA 2.5 - 2.99 dapat mengambil 21 SKS
-   Jika GPA 2 - 2.49 dapat mengambil 18 SKS
-   Jika GPA 1.5 - 1.99 dapat mengambil 15 SKS
-   Jika GPA 0 - 1.49 dapat mengambil 12 SKS

_Output_ dari _function_ ini berupa jumlah SKS yang diperoleh _student_ berdasarkan jumlah IP yang dimiliki dalam bentuk `integer`.

#### Test Case 1

**Input**:

```js
// getCredits(gpa)
getCredits(3);
```

**Expected Output / Behavior**:

```txt
24
```

### `getSubjects`

_Function_ `getSubjects` menerima 1 buah parameter berupa `credits` dimana _value_ dari parameter tersebut berbentuk `integer`.

Pada _function_ ini terdapat _data_ dalam _variable_ `subjectsList` (bertipe _data_ `array of objects`) yang mana beberapa _data_ tersebut berisikan _data_ mata kuliah yang dapat diambil oleh _student_. Setiap elemen dalam `array` marupakan sebuah `object` yang berisikan informasi dari setiap mata kuliah mulai dari `subjectName`, `credit`, dan `status`.

| Name          | Data Type |
| ------------- | --------- |
| _subjectName_ | string    |
| _credit_      | integer   |
| _status_      | string    |

```js
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
        ...
    ];
```

Kalian diminta untuk mengecek dan menambahkan mata kuliah apa saja yang dapat diambil oleh _student_ dengan kriteria berikut:

1. Jika diperhatikan pada _variable_ `subjectsList` terdapat key `status` dengan nilai `wajib` atau `pilihan`. Mata kuliah dengan `status` `wajib` menjadi prioritas untuk _student_ ambil.

    ```js
    // mata kuliah dengan status "wajib", diprioritaskan untuk diambil oleh student
    {
        subjectName: "Statistika",
        credit: 3,
        status: "wajib",
    },

    // mata kuliah dengan status "pilihan" dapat diambil oleh student jika seluruh mata kuliah wajib telah diambil
    {
        subjectName: "Aplikasi IT",
        credit: 3,
        status: "pilihan",
    },
    ```

2. Untuk mata kuliah dengan `status` bernilai `wajib` mengikuti urutan yang ada.

    - Ilmu Politik
    - Ilmu Ekonomi
    - Kepemimpinan
    - Sosiologi
    - Teori Pengambil keputusan
    - Statistika

3. Jika diperhatikan pada _variable_ `subjectsList` terdapat key `credit` dengan nilai mulai dari `1`, `2` dan `3`. Mata kuliah yang `credit`-nya lebih besar menjadi prioritas untuk _student_ ambil.

    ```js
    // mata kuliah dengan credit "3", diprioritaskan untuk diambil oleh student
    {
        subjectName: "Statistika",
        credit: 3,
        status: "pilihan",
    },

    // mata kuliah dengan credit "2" dapat diambil oleh student jika seluruh mata kuliah dengan credit lebih besar telah diambil
    {
        subjectName: "Etika",
        credit: 2,
        status: "pilihan",
    },

    // mata kuliah dengan credit "1" dapat diambil oleh student jika seluruh mata kuliah dengan credit lebih besar telah diambil
    {
        subjectName: "Estetika",
        credit: 1,
        status: "pilihan",
    },
    ```

4. Total `credit` dari setiap mata kuliah yang diambil harus sesuai dengan `credits` yang dimiliki oleh _student_ (**tidak boleh kurang/lebih**).
    > Contoh: student memiliki `credits` sebesar 18 SKS, maka total credit dari seluruh mata kuliah yang diambil berjumlah 18.

Output dari function ini berupa `array of object` dengan setiap elemennya berupa data mata kuliah yang diambil oleh _student_.

#### Test Case 1

**Input**:

```js
// getSubjects(credits)
getSubjects(24);
```

**Expected Output / Behavior**:

```txt
[
    { subjectName: 'Ilmu Politik', credit: 3, status: 'wajib' },
    { subjectName: 'Ilmu Ekonomi', credit: 3, status: 'wajib' },
    { subjectName: 'Kepemimpinan', credit: 3, status: 'wajib' },
    { subjectName: 'Sosiologi', credit: 3, status: 'wajib' },
    {
      subjectName: 'Teori Pengambil keputusan',
      credit: 3,
      status: 'wajib'
    },
    { subjectName: 'Statistika', credit: 3, status: 'wajib' },
    { subjectName: 'Aplikasi IT', credit: 3, status: 'pilihan' },
    { subjectName: 'Etika', credit: 2, status: 'pilihan' },
    { subjectName: 'Estetika', credit: 1, status: 'pilihan' }
]
```

#### Test Case 2

**Input**:

```js
// getSubjects(credits)
getSubjects(21);
```

**Expected Output / Behavior**:

```txt
[
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
```

#### Test Case 3

**Input**:

```js
// getSubjects(credits)
getSubjects(12);
```

**Expected Output / Behavior**:

```txt
[
    { subjectName: "Ilmu Politik", credit: 3, status: "wajib" },
    { subjectName: "Ilmu Ekonomi", credit: 3, status: "wajib" },
    { subjectName: "Kepemimpinan", credit: 3, status: "wajib" },
    { subjectName: "Sosiologi", credit: 3, status: "wajib" },
]
```
