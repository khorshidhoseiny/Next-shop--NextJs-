import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import React from "react";

function SendOptForm({ onChange, isPending, phoneNumber, onSubmit }) {
  return (
    <div className="p-3 rounded-xl">
      <form className="space-y-10" onSubmit={onSubmit}>
        <div className="text-secondary-700  mt-3 flex-col flex w-full justify-start">
          <h6 className="font-semibold text-center">ورود | ثبت نام</h6>
          <p className="mt-5 text-secondary-500">
            سلام!
            <br />
            لطفا شماره موبایل خود را وارد کنید
          </p>
        </div>
        <TextField
          value={phoneNumber}
          onChange={onChange}
          label="شماره موبایل"
          name="phoneNumber"
        />
        <div>
          {isPending ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary font-bold w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOptForm;
