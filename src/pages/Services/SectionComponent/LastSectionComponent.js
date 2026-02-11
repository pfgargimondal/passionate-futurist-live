import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import http from "../../../http";



const LastSectionComponent = () => {
    const [lastSectionOptions, setLastSectionOptions] = useState([]);

    const pathName = useLocation().pathname;

    console.log(pathName);

    console.log(lastSectionOptions);


    useEffect(() => {
        const fetchLastSectionOptions = async () => {
            try {           
                const getresponse = await http.get(`${process.env.REACT_APP_LASTSECTIONOPTIONSAPI}`);
            
                const allData = getresponse.data?.bottom_section_content || [];      

                console.log(allData);

                const serviceData = allData.find(dataOption => dataOption?.slug === pathName);

                setLastSectionOptions(serviceData?.pointers || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchLastSectionOptions();
    }, [pathName]);


    return (
        <div className="dfjhsdfsd">
            <div className="container">
                <div className="fgdfgdf">
                    <div className="row">
                        {lastSectionOptions.map(lastSectionOption => (
                            <div className="col-lg-4" key={lastSectionOption.id}>
                                <Link to={lastSectionOption.url}>
                                    <div className="fdfgdfg" style={{ marginBottom: '12px' }}>
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="sdbjhsdfd">
                                                    <img src={`https://www.asliadmin.passionatefuturist.com${lastSectionOption?.img}`} alt="" />
                                                </div>
                                            </div>

                                            <div className="col-lg-9">
                                                <div className="fbdfjh mt-2" >
                                                    <h5>{lastSectionOption?.content}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSectionComponent;