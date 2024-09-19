import React, { useState, useEffect } from "react";
import NavigateComp from "../components/navigateComp/NavigateComp";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const ChangeModel = () => {
  const { login, setLogin, getImgUrl, notify, updateModel } =
    useGlobalContext();

  const navigate = useNavigate();

  const [brandName, SetBrandName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState({
    mobile: login?.mobile,
    model: null,
  });

  return (
    <div className="full-body">
      <NavigateComp title="Change model" />
      <ul className="mt-4 grid grid-cols-12 gap-4">
        {login?.models.map((model, idx) => {
          return (
            <li
              onClick={() => {
                setLogin({ ...login, model_name: model });
                navigate(-1);
              }}
              key={idx}
              className={`col-span-6 md:col-span-4 w-full p-4 rounded-lg text-center border border-solid  card shadow-lg cursor-pointer flex flex-col gap-2 items-center justify-evenly lg:flex-row bg-white ${
                login?.model_name == model
                  ? "border-[#110df0]"
                  : "border-[#ccc]"
              }`}
            >
              <div className="w-40">
                <img
                  src={"https://justtodo.in/models/" + getImgUrl(model)}
                  className="w-full rounded-xl"
                  alt={model}
                />
              </div>
              {model}
            </li>
          );
        })}
      </ul>
      <div className="inputs flex flex-col gap-4">
        {brandName && (
          <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white">
            <div className="p-2 flex justify-center items-center w-1/5">
              <p className="font-semibold capitalize text-xl md:text-2xl text-[#0d0d0f]">
                Bike brand
              </p>
            </div>
            <input
              className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
              type="text"
              disabled
              value={brandName}
              placeholder="Brand name"
            />
          </div>
        )}
        {body.model && (
          <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg bg-white">
            <div className="p-2 flex justify-center items-center w-1/5">
              <p className="font-semibold capitalize text-xl md:text-2xl text-[#0d0d0f]">
                Bike Model
              </p>
            </div>
            <input
              className="p-2 px-4 font-inherit w-4/5 border-none bg-transparent text-2xl outline-none"
              type="text"
              disabled
              placeholder="Model name"
              value={body.model}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                SetBrandName(null);
                setShowModal(true);
                setBody({ ...body, model: null });
              }}
              className="p-2 px-2 cursor-pointer font-inherit border-none bg-[#ff1635] text-white rounded-md text-2xl transition duration-300 hover:bg-[#ff436c] w-fit capitalize"
            >
              Re-enter model
            </button>
          </div>
        )}
        {!body.model && (
          <div className="flex flex-row justify-evenly gap-3 bg-white">
            <div
              className="font-medium flex justify-center capitalize text-2xl h-fit text-[#ffffff] px-6 mt-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#2d3fdd] cursor-pointer w-full"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              {showModal ? "cancel add" : " ADD Vehicle"}
            </div>
          </div>
        )}
        {body.model && !showModal && (
          <div className="flex flex-row justify-evenly gap-3 bg-white">
            <div
              className="font-medium flex justify-center capitalize text-2xl h-fit text-[#ffffff] px-6 mt-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#2d3fdd] cursor-pointer w-full"
              onClick={() => {
                updateModel(body);
                setShowModal(!showModal);
                SetBrandName(null);
                setBody({ ...body, model: null });
              }}
            >
              ADD New Vehicle
            </div>
          </div>
        )}

        {showModal && (
          <AddVehicle
            SetBrandName={SetBrandName}
            setShowModal={setShowModal}
            setBody={setBody}
            body={body}
            showModal={showModal}
          />
        )}
      </div>
    </div>
  );
};

const AddVehicle = ({
  SetBrandName,
  setBody,
  body,
  setShowModal,
  showModal,
}) => {
  const { fetchFunc, loading, getImgUrl } = useGlobalContext();
  const [brandSearchName, setSearchBrandName] = useState("");
  const [modelSearchName, setSearchModelName] = useState("");
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetchBrandNames();
  }, []);

  const fetchBrandNames = async () => {
    try {
      const response = await fetchFunc("get", "/ac/auth/getBrands", {});
      if (response.status === 200) {
        setBrands(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchModelNames = async (name) => {
    setBrands([]);

    try {
      const response = await fetchFunc(
        "get",
        `/ac/auth/getModelsForBrand?name=${name}`,
        {}
      );
      if (response.status === 200) {
        setBrands([]);
        setModels(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="w-[90vw] h-[90vh] rounded-2xl">
      <p className="text-2xl text-center capitalize font-semibold text-[#2516ff]">
        Please select your bike brand and model.
      </p>
      <div className="form-control w-full flex border-b-2 p-3 border-[#191dff] rounded-lg mt-4">
        <div className="p-2 flex justify-center items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className="p-2 px-4 font-inherit border-none bg-transparent text-2xl outline-none w-full"
          type="text"
          value={models.length > 0 ? modelSearchName : brandSearchName}
          onChange={(e) => {
            models.length > 0
              ? setSearchModelName(e.target.value)
              : setSearchBrandName(e.target.value);
          }}
          placeholder={`Search your ${
            models.length > 0 ? "model" : "brand"
          } name`}
        />
      </div>
      <div className="max-h-[75vh] overflow-y-scroll">
        {brands.length > 0 && models.length < 1 && (
          <ul className="mt-4 grid grid-cols-12 gap-4">
            {brands
              .filter((brand) =>
                brand.toLowerCase().includes(brandSearchName.toLowerCase())
              )
              .map((brand, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    fetchModelNames(brand);
                    SetBrandName(brand);
                  }}
                  className="col-span-6 md:col-span-4 w-full p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg cursor-pointer flex flex-col gap-2 items-center justify-evenly lg:flex-row"
                >
                  <div className="w-40">
                    <img
                      src={"https://justtodo.in/brands/" + getImgUrl(brand)}
                      className="w-full rounded-xl"
                      alt={brand}
                    />
                  </div>
                  {brand}
                </li>
              ))}
          </ul>
        )}
        {models.length > 0 && (
          <ul className="mt-4 grid grid-cols-12 gap-4">
            {models
              .filter((model) =>
                model.toLowerCase().includes(modelSearchName.toLowerCase())
              )
              .map((model, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setBody({ ...body, model });
                    setShowModal(false);
                  }}
                  className="col-span-6 md:col-span-4 w-full p-4 rounded-lg text-center border border-solid border-[#ccc] card shadow-lg cursor-pointer flex flex-col gap-2 items-center justify-evenly lg:flex-row"
                >
                  <div className="w-40">
                    <img
                      src={"https://justtodo.in/models/" + getImgUrl(model)}
                      className="w-full rounded-xl"
                      alt={model}
                    />
                  </div>
                  {model}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChangeModel;
