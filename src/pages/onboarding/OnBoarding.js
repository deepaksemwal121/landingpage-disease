import axios from "axios";
import React, { useState } from "react";
const specialties = [
  { cash: "", scheme: "", id: 1, name: "Internal Medicine", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 2, name: "Respiratory Medicine", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 3, name: "Neurology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 4, name: "Rheumatology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 6, name: "ENT", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 7, name: "Orthopedics", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 8, name: "Obstetrics & Gynecology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 9, name: "Gastroenterology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 10, name: "Nephrology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 11, name: "Plastic Surgery", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 12, name: "Urology & KTP", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 13, name: "CTVS", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 14, name: "GI & Gen. Surgery", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 15, name: "Surgical Oncology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 16, name: "Medical Oncology", opd: "", spoc: { name: "", contact: "" } },
  { cash: "", scheme: "", id: 17, name: "Cardiology", opd: "", spoc: { name: "", contact: "" } },
];
const OnBoarding = () => {
  const [testimonials, setTestimonials] = useState(null);
  const [selectedSpecs, setSelectedSpecs] = useState([]);
  const [channel, setChannel] = useState({
    cash: false,
    scheme: false,
  });
  const [baseline, setBaseline] = useState(null);
  const addRemoveItem = (item) => {
    setSelectedSpecs((items) =>
      selectedSpecs.includes(item) ? selectedSpecs.filter((selected) => selected.id !== item.id) : [...items, item]
    );
  };
  const [discounts, setDiscounts] = useState([{ discount: "", upgrades: "", perm: null }]);
  const [contact, setContact] = useState({
    fo: { name: "", contact: "" },
    doctor: { name: "", contact: "" },
  });
  const [training, setTraining] = useState([{ name: "", contact: "", position: "", department: "" }]);
  const [credentials, setCredentials] = useState([
    { name: "Approx. no of patients treated", value: "", canEdit: false },
    { name: "No of doctor", value: "", canEdit: false },
    { name: "Hospital Ranking", value: "", canEdit: false },
    { name: "No. of specialties", value: "", canEdit: false },
  ]);
  const [files, setFiles] = useState({
    handbook: null,
    service: null,
    rulebook: null,
  });
  const [rulebookNote, setRulebookNote] = useState("");
  const [process, setProcess] = useState({
    details: "",
    poc: "",
  });
  const [whatsapp, setWhatsapp] = useState({
    have: null,
    spoc: "",
    waId: "",
    waToken: "",
  });

  const [additional, setAdditional] = useState({
    hospitalLink: "",
    doctorVideoLink: "",
    outcomeData: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend.aretehealth.tech/api/v1/onboard", {
        specialties: selectedSpecs,
        channel,
        baseline,
        // training,
        contact,
        discounts,
        files,
        rulebookNote,
        process,
        testimonials,
        whatsapp,
        credentials,
        additional,
      });
      alert("Form Submitted");
      window.location.reload(false);
    } catch (error) {
      alert("failure");
    }
  };
  return (
    <div className="p-2">
      <div className="text-center text-2xl pt-8 font-bold">On Boarding Form</div>
      <form onSubmit={submitForm} className="px-28 py-8  ">
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            1. From the below mentioned list, please choose the specialties on which you would like to run the pilot?{" "}
          </div>
          <div className="flex flex-wrap">
            {specialties.map((item) => {
              return (
                <div
                  onClick={() => {
                    addRemoveItem(item);
                  }}
                  key={item.id}
                  className=" my-4 mr-4 flex"
                >
                  <input className="mr-1" type="checkbox" checked={selectedSpecs.includes(item)} />
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">2. Channel of patients</div>
          <div className="flex flex-wrap">
            <div className=" my-4 mr-4 flex">
              <input
                checked={channel.cash}
                onChange={() => setChannel({ ...channel, cash: !channel.cash })}
                className="mr-2"
                type="checkbox"
              />
              <div>Cash / Insurance</div>
            </div>
            <div className=" my-4 mr-4 flex">
              <input
                checked={channel.scheme}
                onChange={() => setChannel({ ...channel, scheme: !channel.scheme })}
                className="mr-2"
                type="checkbox"
              />
              <div>Scheme (CGHS / Govt.)</div>
            </div>
          </div>
        </div> */}
        {/* patient volume */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            2. Please provide the OPD Patient Volume for the selected departments with respect to channel.
          </div>
          <div className="">
            {selectedSpecs.map((item, i) => {
              return (
                <div className=" my-4 mr-4 flex items-center justify-between">
                  <div>{item.name} : </div>
                  <input
                    required
                    className="px-2 py-1 outline-none"
                    placeholder="No. of patients"
                    value={item.opd}
                    onChange={(e) =>
                      setSelectedSpecs((state) => {
                        state[i].opd = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    required
                    className="px-2 py-1 outline-none"
                    placeholder="No. of Cash/Insurance"
                    value={item.cash}
                    onChange={(e) =>
                      setSelectedSpecs((state) => {
                        state[i].cash = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    required
                    className="px-2 py-1 outline-none"
                    placeholder="No. of Scheme Patient"
                    value={item.scheme}
                    onChange={(e) =>
                      setSelectedSpecs((state) => {
                        state[i].scheme = e.target.value;
                        return [...state];
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* questions four */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            3. In order to determine the success rate of the pilot, we need to establish a current OPD to IPD Baseline
            for which the following 3 methods have been proposed. Kindly choose the appropriate option for you.
          </div>
          <div className="flex flex-wrap">
            <div>
              <input checked={baseline === 0 ? true : false} onChange={() => setBaseline(0)} type="checkbox" />
              Share the Historical Data (Past OPD to IPD conversion data){" "}
            </div>
            <div>
              <input checked={baseline === 1 ? true : false} onChange={() => setBaseline(1)} type="checkbox" />
              A/B Testing (If past data is not available, we can record the conversion data during the pilot duration by
              dividing the patient load into 50:50 i.e., 50% patients would be assigned to the pilot programme, while
              the rest of the 50% would be assigned to the hospital for their routine conversion process)
            </div>
            <div>
              <input checked={baseline === 2 ? true : false} onChange={() => setBaseline(2)} type="checkbox" />1 month 1
              Month Data (As the pilot would take a month to start, meanwhile the hospital can record its OPD to IPD
              conversion data (meaning Admission Advised to Admitted data) in order to define a baseline)
            </div>
          </div>
        </div>
        {/* spoc details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            4. Please provide the details of the Single Point of Contact(s) (SPOC) on behalf of the hospital (Department
            wise)
          </div>
          <div className="">
            <div className=" my-4 mr-4 flex justify-between">
              <div className="w-48">Department</div>
              <div className="w-48">SPOC Name</div>
              <div className="w-48">Contact Details</div>
            </div>
            <div className=" my-4 mr-4 flex justify-between">
              <div className="w-48"> Head of FO (For discount /upgrades)</div>
              <input
                className="px-2 w-48 py-1 outline-none"
                required
                value={contact.fo.name}
                onChange={(e) =>
                  setContact((state) => {
                    state.fo.name = e.target.value;
                    return { ...state };
                  })
                }
              />
              <input
                className="px-2 w-48 py-1 outline-none"
                required
                value={contact.fo.contact}
                onChange={(e) =>
                  setContact((state) => {
                    state.fo.contact = e.target.value;
                    return { ...state };
                  })
                }
              />
            </div>
            <div className=" my-4 mr-4 flex justify-between">
              <div className="w-48">Doctor Details</div>
              <input
                className="px-2 w-48 py-1 outline-none"
                required
                value={contact.doctor.name}
                onChange={(e) =>
                  setContact((state) => {
                    state.doctor.name = e.target.value;
                    return { ...state };
                  })
                }
              />
              <input
                className="px-2 w-48 py-1 outline-none"
                required
                value={contact.doctor.contact}
                onChange={(e) =>
                  setContact((state) => {
                    state.doctor.contact = e.target.value;
                    return { ...state };
                  })
                }
              />
            </div>
            {selectedSpecs.map((item, i) => {
              return (
                <div className=" my-4 mr-4 flex justify-between">
                  <div className="w-48">{item.name}</div>
                  <input
                    required
                    className="px-2 py-1 w-48 outline-none"
                    value={item.spoc.name}
                    onChange={(e) =>
                      setSelectedSpecs((state) => {
                        state[i].spoc.name = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    className="px-2 w-48 py-1 outline-none"
                    required
                    value={item.spoc.contact}
                    onChange={(e) =>
                      setSelectedSpecs((state) => {
                        state[i].spoc.contact = e.target.value;
                        return [...state];
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* discount details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            5. As a part of the OPD to IPD conversion process, what all discounts and upgrades will be available to us
            that we can offer your patients (with and without your prior approval)
          </div>
          <div className="">
            <div className=" my-4 mr-4 flex justify-between">
              <div className="w-48">Discount</div>
              <div className="w-48">Upgrades</div>
              <div className="w-60">Permission Required Details</div>
            </div>
            {discounts.map((item, i) => {
              return (
                <div className=" my-4 mr-4 flex justify-between">
                  <input
                    required
                    className="px-2 py-1 w-48 outline-none"
                    value={item.discount}
                    onChange={(e) =>
                      setDiscounts((state) => {
                        state[i].discount = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    required
                    className="px-2 w-60 py-1 outline-none"
                    value={item.upgrades}
                    onChange={(e) =>
                      setDiscounts((state) => {
                        state[i].upgrades = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <select
                    required
                    value={item.perm}
                    onChange={(e) =>
                      setDiscounts((state) => {
                        state[i].perm = e.target.value;
                        return [...state];
                      })
                    }
                    className="w-60"
                  >
                    <option value={null}>-- select --</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              );
            })}
          </div>
          <div onClick={() => setDiscounts([...discounts, { discount: "", upgrades: "", perm: null }])}>Add More</div>
        </div>
        {/* policies and handbook */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">6. Please upload the Hospital Policy and Guidelines Handbook for Admission.</div>
          <input
            required
            value={files.handbook}
            onChange={(e) => setFiles({ ...files, handbook: e.target.value })}
            placeholder="Handbook link"
            className="my-1 py-1 px-4 w-full"
          />
        </div>
        {/* service master */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            7. As a part of our solution, we have automated the financial estimate for patients. In order to utilize
            this feature, we would require your service master along with your ‘Financial Pricing Rules’.
          </div>
          <div className="">
            Either paste link or send these files at{" "}
            <a href="mailto:ayushjain@aretehealth.tech">ayushjain@aretehealth.tech</a>
          </div>
          <div>
            <label for="service master" className="mr-4">
              Service Master
            </label>
            <input
              required
              value={files.service}
              placeholder="Serivce master link"
              onChange={(e) => setFiles({ ...files, service: e.target.value })}
              name="service master"
              className="my-1 w-full py-1 px-4"
            />
          </div>
          <div>
            <label for="service master" className="mr-4">
              Financial pricing rules
            </label>
            <input
              required
              value={files.rulebook}
              onChange={(e) => setFiles({ ...files, rulebook: e.target.value })}
              placeholder="Rule book link"
              name="service master"
              className="my-1 w-full py-1 px-4"
            />
          </div>
          <label for="note" className="mr-4">
            Note
          </label>
          <input
            required
            name="note"
            value={rulebookNote}
            onChange={(e) => setRulebookNote(e.target.value)}
            placeholder="note"
            className="px-4 py-2 w-full h-10 outline-none my-1"
          />
        </div>
        {/* training details */}
        {/* <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            9. As a part of the OPD to IPD conversion process, what discounts and upgrades will be available to us that
            we can offer to your patients, (with/ without your prior approvals)
          </div>
          <div className="">
            <div className=" my-4 mr-4 flex justify-between">
              <div className="w-48">Name</div>
              <div className="w-48">Contact No.</div>
              <div className="w-48">Department</div>
              <div className="w-48">Position</div>
            </div>
            {training.map((item, i) => {
              return (
                <div className=" my-4 mr-4 flex justify-between">
                  <input
                    required
                    className="px-2 py-1 w-48 outline-none"
                    value={item.name}
                    onChange={(e) =>
                      setTraining((state) => {
                        state[i].name = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    required
                    className="px-2 w-60 py-1 outline-none"
                    value={item.contact}
                    onChange={(e) =>
                      setTraining((state) => {
                        state[i].contact = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    required
                    className="px-2 w-60 py-1 outline-none"
                    value={item.department}
                    onChange={(e) =>
                      setTraining((state) => {
                        state[i].department = e.target.value;
                        return [...state];
                      })
                    }
                  />
                  <input
                    required
                    className="px-2 w-60 py-1 outline-none"
                    value={item.position}
                    onChange={(e) =>
                      setTraining((state) => {
                        state[i].position = e.target.value;
                        return [...state];
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
          <div onClick={() => setTraining([...training, { name: "", contact: "", department: "", position: "" }])}>
            Add More
          </div>
        </div> */}
        {/* discount details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            8. Since we will be reaching out to your patients, we would want to know, do you currently follow any
            process to deal with unhappy OPD Patients? (For example – If a patient has conveyed that they or their
            family are not happy with hospital staff member, do you forward that patient’s detail to the hospital
            quality team?)
          </div>
          <div className="">
            <div>Process</div>
            <textarea
              required
              value={process.details}
              onChange={(e) => setProcess({ ...process, details: e.target.value })}
              cols={10}
              placeholder="process"
              className="w-full px-4 h-50 outline-none"
            />
            <div>Point of contact</div>
            <input
              required
              value={process.poc}
              onChange={(e) => setProcess({ ...process, poc: e.target.value })}
              className="h-10 w-full px-4"
              placeholder="Point of contact"
            />
          </div>
        </div>
        {/* testimonials details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            9.Will it be possible for you to share some testimonials of your past patients, which we would like to
            utilize for our OPD to IPD Conversion Process?
          </div>
          <div className="">
            <select
              value={testimonials}
              onChange={(e) => setTestimonials(e.target.value)}
              required
              className="w-full p-2"
            >
              <option value={null}>--Select--</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        {/* whatsapp details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            10. Please provide your WhatsApp Business Account, since our entire solution is based on WhatsApp. If you
            don’t have one, please provide us with the permission to create one on your behalf or please let us know,
            who is the right person to get in touch with to create a WhatsApp Business Account for your organisation?
          </div>
          <div className="">
            <select
              required
              value={whatsapp.have}
              onChange={(e) => setWhatsapp({ ...{ ...whatsapp, have: e.target.value } })}
              className="w-full p-2 my-2"
            >
              <option value={null}>--select --</option>
              <option value={true}>Yes, we have a whatsapp business account</option>
              <option value={false}>No, create whatsapp business account on our behalf.</option>
            </select>
            <input
              value={whatsapp.waId}
              onChange={(e) => setWhatsapp({ ...whatsapp, waId: e.target.value })}
              className="h-10 w-full my-1 px-4"
              placeholder="Whatsapp Phone Number Id"
            />
            <input
              value={whatsapp.waToken}
              onChange={(e) => setWhatsapp({ ...whatsapp, waToken: e.target.value })}
              className="h-10 w-full my-1 px-4"
              placeholder="Whatsapp Authentication Permanent Authentication Token"
            />
            <input
              value={whatsapp.spoc}
              onChange={(e) => setWhatsapp({ ...whatsapp, spoc: e.target.value })}
              className="h-10 w-full my-1 px-4"
              placeholder="Point of contact for whatsapp account creation"
            />
          </div>
        </div>
        {/* hospital details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            11. As a part of our OPD to IPD conversion solution, we will be preparing certain creatives and content for
            the hospital in order to improve OPD to IPD Conversion which would require certain hospital credentials,
            please provide the below mentioned details:
          </div>
          <div className="">
            {credentials.map((item, i) => {
              return (
                <div className=" my-4 mr-4 flex justify-between">
                  {!item.canEdit && <div className="w-72">{item.name}</div>}
                  {item.canEdit && (
                    <input
                      required
                      className="px-2 w-60 py-1 outline-none"
                      value={item.name}
                      onChange={(e) =>
                        setCredentials((state) => {
                          state[i].name = e.target.value;
                          return [...state];
                        })
                      }
                    />
                  )}

                  <input
                    required
                    className="px-2 w-60 py-1 outline-none"
                    value={item.value}
                    onChange={(e) =>
                      setCredentials((state) => {
                        state[i].value = e.target.value;
                        return [...state];
                      })
                    }
                  />
                </div>
              );
            })}
          </div>
          <div onClick={() => setCredentials([...credentials, { name: "", value: "", canEdit: true }])}>Add More</div>
        </div>
        {/* additional details */}
        <div className="my-2 bg-gray-100 rounded-lg p-4">
          <div className="font-bold">
            12. We would appreciate if you could provide any additional content like Hospital Video, Doctor Videos,
            Success Rate creative (if any).
          </div>
          <div className="">
            <div>Hospital Video </div>
            <input
              value={additional.hospitalLink}
              onChange={(e) => setAdditional({ ...additional, hospitalLink: e.target.value })}
              className="h-10 w-full px-4 my-2"
              placeholder="Hospital Video link"
            />
            <div>Doctor Video </div>
            <input
              onChange={(e) => setAdditional({ ...additional, doctorVideoLink: e.target.value })}
              value={additional.doctorVideoLink}
              className="h-10 w-full px-4 my-2"
              placeholder="Doctor Video link"
            />
            <div>Data on outcomes </div>
            <input
              value={additional.outcomeData}
              onChange={(e) => setAdditional({ ...additional, outcomeData: e.target.value })}
              className="h-10 w-full px-4 my-2"
              placeholder="Data on outcomes"
            />
          </div>
        </div>
        <input className="bg-blue-600 py-2 px-4 rounded text-white" type={"submit"} />
      </form>
    </div>
  );
};

export default OnBoarding;
