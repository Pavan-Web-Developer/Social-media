import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

const Report = () => {
    const defaultEntry = [{
        name: "",
        time: "",
        age: "",
        salary: "",
        expense: "",
    }, {
        name: "",
        time: "",
        age: "",
        salary: "",
        expense: "",
    },
    ]
    const [finalData, setFinalData] = useState(defaultEntry)

    const handle = (e, finalData, index) => {
        const newArr = finalData.map((obj, i) => {
            if (i === index) {
                return {
                    ...obj, name: e.target.value
                }
            } else { return obj }
        })
        setFinalData(newArr)
    }
    console.log(finalData)

    return (
        <div className="cms-page">
            <div className="page-content-block">
                {/* {loading && <Spin />} */}
                <div className="full-content-block">
                    <h1 className="page-title">
                        {/* <BackButton /> */}

                        <div className="page-title-right">
                            {/* {ProjectLogo && (
                            <img src={`${imageDefaultPrefixPath}${ProjectLogo}`} alt="" />
                        )}{" "}
                        {ProjectName} */}
                        </div>
                    </h1>
                    <div className="content-details refund-process">
                        <div className="table-top-btn">
                            <div className="search-section">
                                {/* <ContractorSelect
                                regionName={"0"}
                                projectId={projectId}
                                value={contractorDetails ? contractorDetails : null}
                                onChange={(contractor) => {
                                    handleContractorSelect(contractor);
                                }}
                                className="contactname-select"
                                placeholder="Select Sub Contractor"
                                isClearable={false}
                            /> */}
                            </div>
                            {/* {clientData.closing_balance ? (
                    <div className="client-account-balance">
                      <p>
                        Account balance for {FullNameGetterWithoutChartAt(clientData)} :{' '}
                        {clientData?.closing_balance
                          ? NegativeAmountConverter(clientData?.closing_balance)
                          : '$0.00'}
                      </p>
                      <p>
                        Balance after making this payment :{" "}
                        {finalAmount
                          ? clientData?.closing_balance &&
                            NegativeAmountConverter(clientData?.closing_balance - finalAmount)
                          : '$0.00'}
                      </p>
                    </div>
                  ) : (
                    <></>
                  )} */}
                        </div>
                        <div style={{ width: "100%", height: "89%" }}>
                            <div id="grid-wrapper" style={{ width: "100%", height: "100%" }}>
                                <div id="myGrid" className="ag-theme-alpine ato-grid">
                                    <Form>
                                        <div className="form-box">
                                            <div className="refund-process-box">
                                                <Container>
                                                    <Container>
                                                        {/* 
                                                          <Row className="refund-top-details record-payment">
                                                            <Col
                                                                xs={12}
                                                                md={2}
                                                                className="add-record-payment"
                                                            >
                                                                <strong>Transaction Date</strong>
                                                                <Form.Group className="datepicker">
                                                                    <DatePicker
                                                                    name="transaction_date"
                                                                    value={
                                                                        transactionDate ? transactionDate : ""
                                                                    }
                                                                    onChange={(e) => {
                                                                        setTransactionDate(e);
                                                                    }}
                                                                /> 
                                                                </Form.Group>
                                                            </Col>
                                                            <Col
                                                                xs={12}
                                                                md={3}
                                                                className="add-record-payment"
                                                            >
                                                                <strong>File Note</strong>
                                                                <Form.Control
                                                                type="text"
                                                                className="left-text-align"
                                                                required
                                                                maxLength={150}
                                                                value={fileNote ? fileNote : ""}
                                                                rules={[
                                                                    {
                                                                        pattern: new RegExp(
                                                                            /^[^!@#)(^%$<>][a-zA-Z\s\d.,/&-]*$/
                                                                        ),
                                                                        message:
                                                                            "Note can contain letters, numbers, ampersand(&), dot(.), comma(,), hyphon(-), slash(/) & spaces.",
                                                                    },
                                                                ]}
                                                                onChange={(e) => {
                                                                    setFileNote(e.target.value);
                                                                }}
                                                            ></Form.Control>
                                                    </Col>
                                                    <Col
                                                        xs={12}
                                                        md={7}
                                                        className="add-record-payment"
                                                    ></Col>
                                                </Row> */}
                                                        <Row className="refund-card-box record-payment">
                                                            <Col xs={6} md={12}>
                                                                <div className="refund-card">
                                                                    <label>Payment Details</label>
                                                                    <div className="refund-card-content">
                                                                        <div className="refund-card-content-label refund-card-title row col-md-12">
                                                                            <h6 className="col-md-2 center-align">
                                                                                Account
                                                                            </h6>
                                                                            <h6 className="col-md-3 center-align">
                                                                                Name
                                                                            </h6>
                                                                            <h6 className="col-md-2 center-align">
                                                                                Amount
                                                                            </h6>
                                                                            <h6 className="col-md-3 center-align">
                                                                                Description
                                                                            </h6>
                                                                            <h6 className="col-md-1 center-align">
                                                                                BSB
                                                                            </h6>
                                                                            <h6 className="col-md-1 center-align">
                                                                                Account Number
                                                                            </h6>
                                                                        </div>
                                                                        <div className="refund-card-content-row">
                                                                            {finalData &&
                                                                                finalData?.map((item, index) => {
                                                                                    return (
                                                                                        <div
                                                                                            key={index}
                                                                                            className="refund-card-content-label row col-md-12"
                                                                                        >
                                                                                            <div className="col-md-2 refund-column">
                                                                                                {/* <ChartOfAccountSelect
                                                                                                name="chart_account_id"
                                                                                                onChange={(e) => {
                                                                                                    handleNewAccountSelection(
                                                                                                        e,
                                                                                                        index,
                                                                                                        finalData
                                                                                                    );
                                                                                                }}
                                                                                                className="contactname-select"
                                                                                                projectId={projectId}
                                                                                                value={
                                                                                                    item?.chart_account_id
                                                                                                        ? item?.chart_account_id
                                                                                                        : null
                                                                                                }
                                                                                                placeholder="Select Account"
                                                                                                isClearable={false}
                                                                                            /> */}
                                                                                            </div>
                                                                                            <div className="col-md-3 refund-column">
                                                                                                <Form.Group>
                                                                                                    <Form.Control
                                                                                                        disabled
                                                                                                        type="text"
                                                                                                        name="contractor"
                                                                                                        value={
                                                                                                            item?.name
                                                                                                                ? item?.name
                                                                                                                : ""
                                                                                                        }
                                                                                                        onChange={(e) => {
                                                                                                            // handleName(
                                                                                                            //     e,
                                                                                                            //     index,
                                                                                                            //     finalData
                                                                                                            // );
                                                                                                        }}
                                                                                                        style={{
                                                                                                            border:
                                                                                                                "1px solid #d9d9d9",
                                                                                                            padding: "5px 10px",
                                                                                                            fontSize: "14px",
                                                                                                            width: "100%",
                                                                                                            color: "#000",
                                                                                                        }}
                                                                                                    ></Form.Control>
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className="col-md-2 refund-column">
                                                                                                <Form.Group>
                                                                                                    <Form.Control
                                                                                                        required
                                                                                                        type="text"
                                                                                                        name="amount"
                                                                                                        placeholder="Add Amount"
                                                                                                        value={
                                                                                                            item?.amount
                                                                                                                ? item?.amount
                                                                                                                : ""
                                                                                                        }
                                                                                                        onChange={(e) => {
                                                                                                            // handleAmount(
                                                                                                            //     e,
                                                                                                            //     index,
                                                                                                            //     finalData
                                                                                                            // );
                                                                                                            // handleBlurAmount(
                                                                                                            //     e,
                                                                                                            //     index
                                                                                                            // );
                                                                                                        }}
                                                                                                        style={{
                                                                                                            border:
                                                                                                                "1px solid #d9d9d9",
                                                                                                            padding: "5px 10px",
                                                                                                            fontSize: "14px",
                                                                                                            width: "100%",
                                                                                                            color: "#000",
                                                                                                        }}
                                                                                                    />
                                                                                                    {/* <span className="text-danger">
                                                                                                    {amountErrors[index]
                                                                                                        ? amountErrors[index]
                                                                                                        : ""}
                                                                                                </span> */}
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className="col-md-3 refund-column">
                                                                                                <Form.Group>
                                                                                                    <textarea
                                                                                                        name="description"
                                                                                                        placeholder="Add Description"
                                                                                                        rows={2}
                                                                                                        value={
                                                                                                            item?.description
                                                                                                                ? item?.description
                                                                                                                : ""
                                                                                                        }
                                                                                                        onChange={(e) => {
                                                                                                            // handleDescription(
                                                                                                            //     e,
                                                                                                            //     index,
                                                                                                            //     finalData
                                                                                                            // );
                                                                                                            // handleBlurDescription(
                                                                                                            //     e,
                                                                                                            //     index
                                                                                                            // );
                                                                                                        }}
                                                                                                    />
                                                                                                    {/* <span className="error">
                                                                                                    {descriptionErrors[index]
                                                                                                        ? descriptionErrors[index]
                                                                                                        : ""}
                                                                                                </span> */}
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className="col-md-1 refund-column">
                                                                                                <Form.Group>
                                                                                                    {/* <InputMask
                                                                                                    mask="999-999"
                                                                                                    name="bsb"
                                                                                                    value={
                                                                                                        item?.bsb ? item?.bsb : ""
                                                                                                    }
                                                                                                    onChange={(e) => {
                                                                                                        handleBSB(
                                                                                                            e,
                                                                                                            index,
                                                                                                            finalData
                                                                                                        );
                                                                                                    }}
                                                                                                    placeholder="999-999"
                                                                                                    className="ant-input record-payment"
                                                                                                /> */}
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                            <div className="col-md-1  refund-column">
                                                                                                <Form.Group>
                                                                                                    <Form.Control
                                                                                                        required
                                                                                                        type="text"
                                                                                                        name="account_number"
                                                                                                        style={{
                                                                                                            border:
                                                                                                                "1px solid #d9d9d9",
                                                                                                            padding: "5px 10px",
                                                                                                            fontSize: "14px",
                                                                                                            width: "100%",
                                                                                                            color: "#000",
                                                                                                        }}
                                                                                                        onChange={(e) => {
                                                                                                            // handleAccount(
                                                                                                            //     e,
                                                                                                            //     index,
                                                                                                            //     finalData
                                                                                                            // );
                                                                                                            // handleBlurAccount(
                                                                                                            //     e,
                                                                                                            //     index
                                                                                                            // );
                                                                                                        }}
                                                                                                        value={
                                                                                                            item?.account_number
                                                                                                                ? item?.account_number
                                                                                                                : ""
                                                                                                        }
                                                                                                    />
                                                                                                    {/* <span className="error">
                                                                                                    {accountErrors[index]
                                                                                                        ? accountErrors[index]
                                                                                                        : ""}
                                                                                                </span> */}
                                                                                                </Form.Group>
                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                        </div>
                                                                        <div className="refund-card-content-btn-small">
                                                                            <Button
                                                                                className="btn-small"
                                                                            // disabled={handlePostDisabled(finalData)}
                                                                            // onClick={() => {
                                                                            //     handlePost(finalData);
                                                                            // }}
                                                                            >
                                                                                Post
                                                                            </Button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Container>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            {/* <Modal
            size="lg"
            show={show}
            onHide={handleConfirmModal}
            dialogClassName="modal-50w small-popup review-popup small-review"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="mb-0" closeButton>
                New Trust Payment
            </Modal.Header>
            <Modal.Body>
                {loading && <Spin />}
                <div className="modal-body">
                    <p>
                        Are your sure you want to add this payment?
                        <br />
                        Once you confirm, you can't edit and delete this payment.
                    </p>
                </div>
                <div className="modal-footer">
                    <Button
                        type="Button"
                        className="btn btn-secondary"
                        onClick={() => {
                            handleConfirmModal();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={() => {
                            handleSubmitPost(finalSubminData);
                        }}
                    >
                        OK
                    </Button>
                </div>
            </Modal.Body>
        </Modal> */}
        </div >

        // <div className='main page'>
        //     <div className='content'>
        //         <Card>
        //             <Container>
        //                 <Card.Title><Row>
        //                     <Col>NAME</Col>
        //                     <Col>TIME</Col>
        //                     <Col>AGE</Col>
        //                     <Col>SALARY</Col>
        //                     <Col>EXPENSE</Col>
        //                 </Row></Card.Title>
        //             </Container>

        //             {finalData && finalData.map((item, index) => {
        //                 console.log(item)
        //                 return (
        //                     <Card.Body>
        //                         <Form>
        //                             <Container>
        //                                 <Row>
        //                                     <Col xs={2}>
        //                                         <Form.Group>
        //                                             <Form.Control
        //                                                 type='text'
        //                                                 value={item.name ? item.name : ""}
        //                                                 name="name"
        //                                                 onChange={(e) => handle(e, finalData, index)
        //                                                 }
        //                                             >
        //                                             </Form.Control>
        //                                         </Form.Group>
        //                                     </Col>
        //                                     <Col></Col>
        //                                     <Col></Col>
        //                                     <Col></Col>
        //                                 </Row>
        //                             </Container>
        //                         </Form></Card.Body>)
        //             })}
        //         </Card>
        //     </div ></div>
    )
}

export default Report




// import BackButton from "../../components/Form/BackButton";
// import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import moment from "moment";
// import { useNavigate, useParams } from "react-router";
// import { API, fileUpload, imageDefaultPrefixPath } from "../../config";
// import InputMask from "react-input-mask";
// import { DatePicker } from "@semcore/date-picker";
// import ContractorSelect from "../common/ContractorSelect";
// import ChartOfAccountSelect from "../common/ChartOfAccountSelect";
// import { getContractorDetail } from "../Project/sub-contractors/components/SubContractorHelper";
// import Spin from "../common/Spin";
// import { checkIfFileExists, formatName } from "../common/Misc";
// import { getProjectData } from "../Project/components/ProjectHelper";
// import { useEffect } from "react";

// const RecordPayments = () => {
//   const [fileNote, setFileNote] = useState("");
//   const [amountErrors, setAmountErrors] = useState({});
//   const [descriptionErrors, setDescriptionErrors] = useState({});
//   const [finalData, setFinalData] = useState([]);
//   const [contractorDetails, setContractorDetails] = useState();
//   const [transactionDate, setTransactionDate] = useState(new Date());
//   const [loading, setLoading] = useState(false);

//   const [accountErrors, setAccountErrors] = useState({});
//   const params = useParams();
//   const projectId = params?.project_id;
//   const navigate = useNavigate();

//   const [finalSubminData, setFinalSubminData] = useState([]);
//   const [show, setShow] = useState(false);

//   const [ProjectName, setProjectName] = useState();
//   const [ProjectLogo, setProjectLogo] = useState();
//   useEffect(() => {
//     getProjectData(projectId, setProjectName, setProjectLogo);
//   }, [projectId]);

//   useEffect(() => {
//     if (ProjectLogo && typeof ProjectLogo === "string") {
//       checkIfFileExists(`${imageDefaultPrefixPath}${ProjectLogo}`, (exists) => {
//         if (exists) {
//           setProjectLogo(ProjectLogo);
//         } else {
//           setProjectLogo("");
//         }
//       });
//     } else {
//       setProjectLogo("");
//     }
//   }, [ProjectLogo]);

//   function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
//   }

//   const handlePostDisabled = (finalData) => {
//     if (finalData && finalData?.length > 0) {
//       const amountError = Object.values(amountErrors);
//       const descriptionError = Object.values(descriptionErrors);
//       const checkAmountError = Object.values(
//         amountError.filter((item, index) => amountError.indexOf(item) === index)
//       );
//       const checkDescriptionError = Object.values(
//         descriptionError.filter(
//           (item, index) => descriptionError.indexOf(item) === index
//         )
//       );
//       const checkData = finalData?.map((element, index) => {
//         if (
//           (checkAmountError[index] === null ||
//             checkAmountError[index] === undefined) &&
//           (checkDescriptionError[index] === null ||
//             checkDescriptionError[index] === undefined) &&
//           element?.chart_account_id &&
//           element?.amount &&
//           element?.description &&
//           element?.bsb &&
//           element?.account_number
//         ) {
//           return false;
//         } else {
//           return true;
//         }
//       });
//       return checkData?.find((item) => item === true) || !fileNote
//         ? true
//         : false;
//     } else {
//       return true;
//     }
//   };

//   const handleConfirmModal = () => {
//     setShow(false);
//     setFinalSubminData([]);
//   };

//   const handlePost = async (finalData) => {
//     setShow(true);
//     setFinalSubminData(finalData);
//   };

//   const handleSubmitPost = async (finalData) => {
//     const formData = new FormData();
//     formData.append("builder_project_id", projectId ? projectId : "");
//     formData.append(
//       `contact_id`,
//       contractorDetails?.id ? contractorDetails?.id : ""
//     );
//     formData.append(
//       "transaction_date",
//       transactionDate ? moment(transactionDate).format("DD-MM-YYYY") : ""
//     );
//     formData.append("note", fileNote ? fileNote : "");

//     finalData?.forEach((item, index) => {
//       if (item) {
//         index === 1 &&
//           formData.append(
//             `payments[${index}][retention_id]`,
//             projectId ? projectId : ""
//           );
//         index === 0 &&
//           formData.append(
//             `payments[${index}][contact_id]`,
//             contractorDetails?.id ? contractorDetails?.id : ""
//           );
//         formData.append(
//           `payments[${index}][chart_account_id]`,
//           item?.chart_account_id?.id ? item?.chart_account_id?.id : ""
//         );

//         formData.append(
//           `payments[${index}][amount]`,
//           item?.amount ? item?.amount : 0
//         );
//         formData.append(
//           `payments[${index}][description]`,
//           item?.description ? item?.description : ""
//         );
//         formData.append(`payments[${index}][bsb]`, item?.bsb ? item?.bsb : "");
//         formData.append(
//           `payments[${index}][account_number]`,
//           item?.account_number ? item?.account_number : ""
//         );
//       }
//     });

//     try {
//       setLoading(true);
//       const response = await fileUpload(`${API.CREATE_PAYMENTS}`, formData, {});
//       if (response?.data?.message) {
//         toast.success(response?.data?.message);
//         setFinalData([]);
//         setTransactionDate(moment());
//         setFileNote("");
//         handleConfirmModal();
//         navigate(-1);
//       }
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       const errors = error?.response?.data?.errors;
//       Object.keys(errors).forEach((key) => {
//         toast.error(errors[key][0]);
//       });
//     }
//   };

//   const getContractor = async (contractorId) => {
//     try {
//       setLoading(true);
//       const data = await getContractorDetail(contractorId);
//       const contractorData = data ? data : {};
//       if (contractorData?.id) {
//         const contractorName = formatName(
//           contractorData?.first_name,
//           contractorData?.last_name
//         );
//         const newArr = [
//           {
//             chart_account_id: contractorData?.chart_of_account_id
//               ? contractorData?.chart_of_account_id
//               : "",
//             name: contractorData?.account_name
//               ? contractorData?.account_name === contractorName
//                 ? contractorData?.account_name
//                 : `${contractorData?.account_name} (${contractorName})`
//               : "",
//             amount: contractorData?.amount ? contractorData?.amount : "",
//             description: contractorData?.description
//               ? contractorData?.description
//               : "",
//             bsb: contractorData?.bsb ? contractorData?.bsb : "",
//             account_number: contractorData?.account_number
//               ? contractorData?.account_number
//               : "",
//           },
//           {
//             chart_account_id: "",
//             name: contractorData?.project?.retention_account_name
//               ? contractorData?.project?.retention_account_name ===
//                 contractorName
//                 ? contractorData?.project?.retention_account_name
//                 : `${contractorData?.project?.retention_account_name} (${contractorData?.project?.project_name})`
//               : "",
//             amount: "",
//             description: contractorData?.project?.description
//               ? contractorData?.project?.description
//               : "",
//             bsb: contractorData?.project?.retention_bsb
//               ? contractorData?.project?.retention_bsb
//               : "",
//             account_number: contractorData?.project?.retention_account_number
//               ? contractorData?.project?.retention_account_number
//               : "",
//           },
//         ];
//         setFinalData(newArr);
//       }
//       setLoading(false);
//     } catch (e) {
//       setFinalData([]);
//       toast.error("Something went wrong.");
//     }
//   };

//   const handleContractorSelect = async (contractor) => {
//     setContractorDetails(contractor);
//     getContractor(contractor?.id);
//   };

//   const handleNewAccountSelection = (e, index, finalData) => {
//     const newArr = finalData.map((obj, i) => {
//       if (i === index) {
//         return { ...obj, chart_account_id: e };
//       }
//       return obj;
//     });
//     setFinalData(newArr);
//   };

//   const handleName = (e, index, finalData) => {
//     const newArr = finalData.map((obj, i) => {
//       if (i === index) {
//         return { ...obj, name: e.target.value };
//       }
//       return obj;
//     });
//     setFinalData(newArr);
//   };

//   const handleAmount = (e, index, finalData) => {
//     const newArr = finalData.map((obj, i) => {
//       if (i === index) {
//         return { ...obj, amount: e.target.value };
//       }
//       return obj;
//     });
//     setFinalData(newArr);
//   };
//   const handleBlurAmount = (e, index) => {
//     let errors = amountErrors;
//     let regex = new RegExp(/^\d*\.?\d*$/);
//     if (e) {
//       const checkNote = regex.exec(e.target.value) ?? false;
//       if (e.target.value && checkNote === false) {
//         errors[index] = "Enter valid Amount.";
//       } else {
//         errors[index] = null;
//       }
//     } else {
//       toast.error("Something went wrong.");
//     }
//     setAmountErrors({ ...errors });
//   };

//   const handleDescription = (e, index, finalData) => {
//     const newArr = finalData.map((obj, i) => {
//       if (i === index) {
//         return { ...obj, description: e.target.value };
//       }
//       return obj;
//     });
//     setFinalData(newArr);
//   };
//   const handleBlurDescription = (e, index) => {
//     let errors = descriptionErrors;
//     let regex = new RegExp(/^[^!@#)(^%$<>][a-zA-Z\s\d.,/&-]*$/);
//     if (e) {
//       const checkNote = regex.exec(e.target.value) ?? false;
//       if (e.target.value && checkNote === false) {
//         errors[index] = "Enter valid Description.";
//       } else {
//         errors[index] = null;
//       }
//     } else {
//       toast.error("Something went wrong.");
//     }
//     setDescriptionErrors({ ...errors });
//   };

//   const handleBSB = (e, index, finalData) => {
//     const newArr = finalData.map((obj, i) => {
//       if (i === index) {
//         return { ...obj, bsb: e.target.value };
//       }
//       return obj;
//     });
//     setFinalData(newArr);
//   };

//   const handleAccount = (e, index, finalData) => {
//     const newArr = finalData.map((obj, i) => {
//       if (i === index) {
//         return { ...obj, account_number: e.target.value };
//       }
//       return obj;
//     });
//     setFinalData(newArr);
//   };
//   const handleBlurAccount = (e, index) => {
//     let errors = accountErrors;
//     let regex = new RegExp(/^\d{0,9}$/);

//     if (e.target.value || e.target.value === 0) {
//       const checkNote = regex.exec(e.target.value) ?? false;
//       if (e.target.value && checkNote === false) {
//         errors[index] = "Must be 9 digit number.";
//       } else {
//         let myFunc = (num) => Number(num);
//         var intArr = Array.from(String(e.target.value), myFunc);
//         const removeDuplicatesArr = removeDuplicates(intArr);
//         if (intArr?.length > 1 && removeDuplicatesArr?.length === 1) {
//           errors[index] =
//             "Please enter valid Account Number. All digits of same number are not allowed.";
//         } else {
//           errors[index] = null;
//         }
//       }
//     } else {
//       toast.error("Something went wrong.");
//     }
//     setAccountErrors({ ...errors });
//   };

//   return (
//     <div className="cms-page">
//       <div className="page-content-block">
//         {loading && <Spin />}
//         <div className="full-content-block">
//           <h1 className="page-title">
//             <BackButton />
//             New Trust Payment{" "}
//             <div className="page-title-right">
//               {ProjectLogo && (
//                 <img src={`${imageDefaultPrefixPath}${ProjectLogo}`} alt="" />
//               )}{" "}
//               {ProjectName}
//             </div>
//           </h1>
//           <div className="content-details refund-process">
//             <div className="table-top-btn">
//               <div className="search-section">
//                 <ContractorSelect
//                   regionName={"0"}
//                   projectId={projectId}
//                   value={contractorDetails ? contractorDetails : null}
//                   onChange={(contractor) => {
//                     handleContractorSelect(contractor);
//                   }}
//                   className="contactname-select"
//                   placeholder="Select Sub Contractor"
//                   isClearable={false}
//                 />
//               </div>
//               {/* {clientData.closing_balance ? (
//                 <div className="client-account-balance">
//                   <p>
//                     Account balance for {FullNameGetterWithoutChartAt(clientData)} :{' '}
//                     {clientData?.closing_balance
//                       ? NegativeAmountConverter(clientData?.closing_balance)
//                       : '$0.00'}
//                   </p>
//                   <p>
//                     Balance after making this payment :{" "}
//                     {finalAmount
//                       ? clientData?.closing_balance &&
//                         NegativeAmountConverter(clientData?.closing_balance - finalAmount)
//                       : '$0.00'}
//                   </p>
//                 </div>
//               ) : (
//                 <></>
//               )} */}
//             </div>
//             <div style={{ width: "100%", height: "89%" }}>
//               <div id="grid-wrapper" style={{ width: "100%", height: "100%" }}>
//                 <div id="myGrid" className="ag-theme-alpine ato-grid">
//                   <Form>
//                     <div className="form-box">
//                       <div className="refund-process-box">
//                         <Container>
//                           <Container>
//                             <Row className="refund-top-details record-payment">
//                               <Col
//                                 xs={12}
//                                 md={2}
//                                 className="add-record-payment"
//                               >
//                                 <strong>Transaction Date</strong>
//                                 <Form.Group className="datepicker">
//                                   <DatePicker
//                                     name="transaction_date"
//                                     value={
//                                       transactionDate ? transactionDate : ""
//                                     }
//                                     onChange={(e) => {
//                                       setTransactionDate(e);
//                                     }}
//                                   />
//                                 </Form.Group>
//                               </Col>
//                               <Col
//                                 xs={12}
//                                 md={3}
//                                 className="add-record-payment"
//                               >
//                                 <strong>File Note</strong>
//                                 <Form.Control
//                                   type="text"
//                                   className="left-text-align"
//                                   required
//                                   maxLength={150}
//                                   value={fileNote ? fileNote : ""}
//                                   rules={[
//                                     {
//                                       pattern: new RegExp(
//                                         /^[^!@#)(^%$<>][a-zA-Z\s\d.,/&-]*$/
//                                       ),
//                                       message:
//                                         "Note can contain letters, numbers, ampersand(&), dot(.), comma(,), hyphon(-), slash(/) & spaces.",
//                                     },
//                                   ]}
//                                   onChange={(e) => {
//                                     setFileNote(e.target.value);
//                                   }}
//                                 ></Form.Control>
//                               </Col>
//                               <Col
//                                 xs={12}
//                                 md={7}
//                                 className="add-record-payment"
//                               ></Col>
//                             </Row>
//                             <Row className="refund-card-box record-payment">
//                               <Col xs={6} md={12}>
//                                 <div className="refund-card">
//                                   <label>Payment Details</label>
//                                   <div className="refund-card-content">
//                                     <div className="refund-card-content-label refund-card-title row col-md-12">
//                                       <h6 className="col-md-2 center-align">
//                                         Account
//                                       </h6>
//                                       <h6 className="col-md-3 center-align">
//                                         Name
//                                       </h6>
//                                       <h6 className="col-md-2 center-align">
//                                         Amount
//                                       </h6>
//                                       <h6 className="col-md-3 center-align">
//                                         Description
//                                       </h6>
//                                       <h6 className="col-md-1 center-align">
//                                         BSB
//                                       </h6>
//                                       <h6 className="col-md-1 center-align">
//                                         Account Number
//                                       </h6>
//                                     </div>
//                                     <div className="refund-card-content-row">
//                                       {finalData &&
//                                         finalData?.map((item, index) => {
//                                           return (
//                                             <div
//                                               key={index}
//                                               className="refund-card-content-label row col-md-12"
//                                             >
//                                               <div className="col-md-2 refund-column">
//                                                 <ChartOfAccountSelect
//                                                   name="chart_account_id"
//                                                   onChange={(e) => {
//                                                     handleNewAccountSelection(
//                                                       e,
//                                                       index,
//                                                       finalData
//                                                     );
//                                                   }}
//                                                   className="contactname-select"
//                                                   projectId={projectId}
//                                                   value={
//                                                     item?.chart_account_id
//                                                       ? item?.chart_account_id
//                                                       : null
//                                                   }
//                                                   placeholder="Select Account"
//                                                   isClearable={false}
//                                                 />
//                                               </div>
//                                               <div className="col-md-3 refund-column">
//                                                 <Form.Group>
//                                                   <Form.Control
//                                                     disabled
//                                                     type="text"
//                                                     name="contractor"
//                                                     value={
//                                                       item?.name
//                                                         ? item?.name
//                                                         : ""
//                                                     }
//                                                     onChange={(e) => {
//                                                       handleName(
//                                                         e,
//                                                         index,
//                                                         finalData
//                                                       );
//                                                     }}
//                                                     style={{
//                                                       border:
//                                                         "1px solid #d9d9d9",
//                                                       padding: "5px 10px",
//                                                       fontSize: "14px",
//                                                       width: "100%",
//                                                       color: "#000",
//                                                     }}
//                                                   ></Form.Control>
//                                                 </Form.Group>
//                                               </div>
//                                               <div className="col-md-2 refund-column">
//                                                 <Form.Group>
//                                                   <Form.Control
//                                                     required
//                                                     type="text"
//                                                     name="amount"
//                                                     placeholder="Add Amount"
//                                                     value={
//                                                       item?.amount
//                                                         ? item?.amount
//                                                         : ""
//                                                     }
//                                                     onChange={(e) => {
//                                                       handleAmount(
//                                                         e,
//                                                         index,
//                                                         finalData
//                                                       );
//                                                       handleBlurAmount(
//                                                         e,
//                                                         index
//                                                       );
//                                                     }}
//                                                     style={{
//                                                       border:
//                                                         "1px solid #d9d9d9",
//                                                       padding: "5px 10px",
//                                                       fontSize: "14px",
//                                                       width: "100%",
//                                                       color: "#000",
//                                                     }}
//                                                   />
//                                                   <span className="text-danger">
//                                                     {amountErrors[index]
//                                                       ? amountErrors[index]
//                                                       : ""}
//                                                   </span>
//                                                 </Form.Group>
//                                               </div>
//                                               <div className="col-md-3 refund-column">
//                                                 <Form.Group>
//                                                   <textarea
//                                                     name="description"
//                                                     placeholder="Add Description"
//                                                     rows={2}
//                                                     value={
//                                                       item?.description
//                                                         ? item?.description
//                                                         : ""
//                                                     }
//                                                     onChange={(e) => {
//                                                       handleDescription(
//                                                         e,
//                                                         index,
//                                                         finalData
//                                                       );
//                                                       handleBlurDescription(
//                                                         e,
//                                                         index
//                                                       );
//                                                     }}
//                                                   />
//                                                   <span className="error">
//                                                     {descriptionErrors[index]
//                                                       ? descriptionErrors[index]
//                                                       : ""}
//                                                   </span>
//                                                 </Form.Group>
//                                               </div>
//                                               <div className="col-md-1 refund-column">
//                                                 <Form.Group>
//                                                   <InputMask
//                                                     mask="999-999"
//                                                     name="bsb"
//                                                     value={
//                                                       item?.bsb ? item?.bsb : ""
//                                                     }
//                                                     onChange={(e) => {
//                                                       handleBSB(
//                                                         e,
//                                                         index,
//                                                         finalData
//                                                       );
//                                                     }}
//                                                     placeholder="999-999"
//                                                     className="ant-input record-payment"
//                                                   />
//                                                 </Form.Group>
//                                               </div>
//                                               <div className="col-md-1  refund-column">
//                                                 <Form.Group>
//                                                   <Form.Control
//                                                     required
//                                                     type="text"
//                                                     name="account_number"
//                                                     style={{
//                                                       border:
//                                                         "1px solid #d9d9d9",
//                                                       padding: "5px 10px",
//                                                       fontSize: "14px",
//                                                       width: "100%",
//                                                       color: "#000",
//                                                     }}
//                                                     onChange={(e) => {
//                                                       handleAccount(
//                                                         e,
//                                                         index,
//                                                         finalData
//                                                       );
//                                                       handleBlurAccount(
//                                                         e,
//                                                         index
//                                                       );
//                                                     }}
//                                                     value={
//                                                       item?.account_number
//                                                         ? item?.account_number
//                                                         : ""
//                                                     }
//                                                   />
//                                                   <span className="error">
//                                                     {accountErrors[index]
//                                                       ? accountErrors[index]
//                                                       : ""}
//                                                   </span>
//                                                 </Form.Group>
//                                               </div>
//                                             </div>
//                                           );
//                                         })}
//                                     </div>
//                                     <div className="refund-card-content-btn-small">
//                                       <Button
//                                         className="btn-small"
//                                         disabled={handlePostDisabled(finalData)}
//                                         onClick={() => {
//                                           handlePost(finalData);
//                                         }}
//                                       >
//                                         Post
//                                       </Button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </Col>
//                             </Row>
//                           </Container>
//                         </Container>
//                       </div>
//                     </div>
//                   </Form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Modal
//         size="lg"
//         show={show}
//         onHide={handleConfirmModal}
//         dialogClassName="modal-50w small-popup review-popup small-review"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header className="mb-0" closeButton>
//           New Trust Payment
//         </Modal.Header>
//         <Modal.Body>
//           {loading && <Spin />}
//           <div className="modal-body">
//             <p>
//               Are your sure you want to add this payment?
//               <br />
//               Once you confirm, you can't edit and delete this payment.
//             </p>
//           </div>
//           <div className="modal-footer">
//             <Button
//               type="Button"
//               className="btn btn-secondary"
//               onClick={() => {
//                 handleConfirmModal();
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               type="submit"
//               className="btn btn-primary"
//               data-dismiss="modal"
//               onClick={() => {
//                 handleSubmitPost(finalSubminData);
//               }}
//             >
//               OK
//             </Button>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default RecordPayments;
