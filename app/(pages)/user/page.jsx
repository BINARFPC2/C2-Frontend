"use client"
import Image from "next/image";
import IconEdit from "@/assets/fi_edit.svg";
import IconSetting from "@/assets/fi_settings.svg";
import IconLogOut from "@/assets/fi_log-out.svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BackArrow from "@/assets/fi_arrow.svg";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/helper";

const getWhoAmI = async (token) => {
  const response = await fetch("https://c2-backend.up.railway.app/api/v1/whoami", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return await response.json()
}

const UserPage = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({})
  const token = getToken();

  const fetchUser = async () => {
    const user = await getWhoAmI(token);
    setData(user)
  }

  useEffect(() => {
    fetchUser()
  }, [token])

  const handleToggle = () => {
    setIsEdit(true)
  }
  const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: ''
  };

  const handleSubmit = (values) => {
    console.log('Data yang di-submit:', values);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = 'Nama Lengkap harus diisi';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'No Telepon harus diisi';
    }

    if (!values.email) {
      errors.email = 'Email harus diisi';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email tidak valid';
    }

    return errors;
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-[968px]">
        <div className="ticket-section pb-4 border-b-2 drop-shadow-md mx-2">
          <div className="text-heading">
            <h1 className="text-xl font-bold leading-8 mt-12">Akun</h1>
          </div>
          <div className="search flex flex-col sm:flex-row gap-4 mt-4">
            <div className="sm:w-full flex bg-[#A06ECE] h-[50px] rounded-xl items-center text-white font-medium text-base leading-6 gap-1">
              <a href="#"><Image
                className="ml-3 mr-5"
                src={BackArrow}
                width={24}
                height={24}
                alt=""
              /></a>
              <span>Beranda</span>
            </div>
          </div>
        </div>
        <div className="main flex flex-col sm:flex-row mx-auto">
          <div className="user-section mt-12 flex flex-col sm:flex-row gap-x-4">
            <div className="sm:w-[370px]">
              <div className="content mx-2">
                <div className="flex font-medium text-base leading-6 border-b-2 pb-4 mb-4">
                  <Image
                    className="mr-4"
                    src={IconEdit}
                    width={24}
                    height={24}
                    alt=""
                  />
                  Ubah Profil
                </div>
                <div className="flex font-medium text-base leading-6 border-b-2 pb-4 mb-4">
                  <Image
                    className="mr-4"
                    src={IconSetting}
                    width={24}
                    height={24}
                    alt=""
                  />
                  Pengaturan Akun
                </div>
                <div className="flex font-medium text-base leading-6 border-b-2 pb-4">
                  <Image
                    className="mr-4"
                    src={IconLogOut}
                    width={24}
                    height={24}
                    alt=""
                  />
                  Keluar
                </div>
                <div className="version font-normal text-xs leading-4 text-[#8A8A8A] mt-4 text-center">Version 1.1.0</div>
              </div>
            </div>
            <div className="sm:w-[550px] mx-2">
              <div className="card-ubah mx-4 border-2 shadow rounded">
                <div className="wrapper mx-4 mt-10">
                  <div className="font-bold text-xl leading-8 my-4">Ubah Data Profil</div>
                  <div className="content">
                    <div className="rounded-t-lg bg-[#A06ECE] h-[40px] text-justify font-medium text-base text-white leading-6 px-4 py-2 ">Data Diri</div>
                    <div className="form">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validate={validateForm}
                      >
                        <Form className="bg-white rounded px-8 py-6">
                          <div className="mb-4">
                            <label className="block text-sm text-[#4B1979] font-bold mb-2" htmlFor="fullName">Nama Lengkap</label>
                            <Field
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="fullName"
                              type="text"
                              name="fullName"
                              placeholder="Masukkan Nama Lengkap"
                            />
                            <ErrorMessage
                              className="text-red-500 text-xs italic"
                              name="fullName"
                              component="div"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-[#4B1979] text-sm font-bold mb-2" htmlFor="phoneNumber">No Telepon</label>
                            <Field
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="phoneNumber"
                              type="text"
                              name="phoneNumber"
                              placeholder="Masukkan No Telepon"
                            />
                            <ErrorMessage
                              className="text-red-500 text-xs italic"
                              name="phoneNumber"
                              component="div"
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-[#4B1979] text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <Field
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Masukkan Email"
                            />
                            <ErrorMessage
                              className="text-red-500 text-xs italic"
                              name="email"
                              component="div"
                            />
                          </div>
                          <div className="flex justify-center mt-8">
                            {isEdit ? (<button
                              className="w-[150px] h-[48px] bg-[#4B1979] rounded-xl text-white text-base leading-6"
                              type="submit"
                            >
                              Edit
                            </button>) : (<button
                              className="w-[150px] h-[48px] bg-[#4B1979] rounded-xl text-white text-base leading-6"
                              type="submit" onClick={handleToggle}
                            >
                              Simpan
                            </button>)}

                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
