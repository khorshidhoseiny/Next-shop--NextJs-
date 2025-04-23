import Loading from "@/common/Loading";
import RadioInput from "@/common/RadioInput";
import TextField from "@/common/TextField";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

import Select from "react-select";
function CouponsForm({
  setType,
  options,
  setProductIds,
  expireDate,
  setExpireDate,
  isPending,
  formData,
  handlechange,
  type,
  handleSubmit,
  defaultValue = "",
}) {
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <TextField
        label="کد"
        name="code"
        onChange={handlechange}
        value={formData.code || ""}
      />
      <TextField
        label="مقدار"
        name="amount"
        onChange={handlechange}
        value={formData.amount || ""}
      />
      <TextField
        label="ظرفیت"
        name="usageLimit"
        onChange={handlechange}
        value={formData.usageLimit || ""}
      />
      <div>
        <span className="mb-5">نوع</span>
        <div className="flex mt-4 justify-between ">
          <RadioInput
            checked={type === "percent"}
            label="درصد"
            name="type"
            id="percent-type"
            value="percent"
            onChange={(e) => setType(e.target.value)}
          />
          <RadioInput
            checked={type === "fixedProduct"}
            label="مقدار ثابت"
            name="type"
            id="fixedProduct-type"
            value="fixedProduct"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <label htmlFor="productsId">شامل محصول</label>
        <Select
          isMulti
          instanceId="productsId"
          options={options}
          getOptionLabel={(option) => option.title}
          getOptionValue={(option) => option._id}
          onChange={setProductIds}
          defaultValue={defaultValue}
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <span className="mb-2 block">تاریخ انقضا</span>
        <DatePicker
          inputClass="textField__input w-[330px]"
          value={expireDate}
          onChange={(date) => setExpireDate(date)}
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD"
          calendarPosition="bottom-left"
        />
      </div>

      {isPending ? (
        <Loading />
      ) : (
        <button
          className="w-full mt-4 btn btn--primary"
          type="submit"
          variant="primary"
        >
          تایید
        </button>
      )}
    </form>
  );
}

export default CouponsForm;
