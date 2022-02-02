import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../../actions/contactAction";

function ListContacts() {
  const { getListContactResult, getListContactLoading, getListContactError } =
    useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // get action get_list_contact
    dispatch(getListContact());
  }, [dispatch]);
  return (
    <div>
      <h4>List Contact</h4>
      {getListContactResult ? (
        getListContactResult.map((x) => {
          return (
            <p key={x.id}>
              {x.nama} - {x.nohp}{" "}
            </p>
          );
        })
      ) : getListContactLoading ? (
        <p>loading ...</p>
      ) : (
        <p>{getListContactError ? getListContactError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default ListContacts;
