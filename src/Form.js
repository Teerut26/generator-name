import React, { useEffect, useState } from "react";

export default function Form(props) {
  const [MR, setMR] = useState(null);
  const [CodeSubject, setCodeSubject] = useState(null);
  const [Fname, setFname] = useState(null);
  const [Lname, setLname] = useState(null);
  const [Number, setNumber] = useState(null);
  const [Room, setRoom] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.Loading1 === true && props.Loading2 === true) {
      setLoading(true);
    } else if (props.Loading1 === false && props.Loading2 === false) {
      setLoading(false);
    }
    console.log(
      "🚀 ~ file: Form.js ~ line 18 ~ useEffect ~ props.Loading1",
      props.Loading1
    );
    console.log(
      "🚀 ~ file: Form.js ~ line 18 ~ useEffect ~ props.Loading2",
      props.Loading2
    );
  }, [props.Loading1, props.Loading2]);

  const submit = (e) => {
    e.preventDefault();
    const check =
      MR !== null &&
      CodeSubject !== null &&
      Fname !== null &&
      Lname !== null &&
      Number !== null &&
      Room !== null;
    if (check) {
      props.Data({
        MR: MR,
        CodeSubject: CodeSubject,
        Fname: Fname,
        Lname: Lname,
        Number: Number,
        Room: Room,
      });
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div classname="mb-3">
          {/* <label classname="form-label">เลือกคำนำหน้า</label> */}
          <select
            onChange={(v) =>
              v.target.value !== "เลือกคำนำหน้า"
                ? setMR(v.target.value)
                : setMR(null)
            }
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected>เลือกคำนำหน้า</option>
            <option value={"นาย"}>นาย</option>
            <option value={"นางสาว"}>นางสาว</option>
          </select>
          <select
            onChange={(v) =>
              v.target.value !== "เลือกรหัสวิชา"
                ? setCodeSubject(v.target.value)
                : setCodeSubject(null)
            }
            className="form-select"
            aria-label="Default select example"
          >
            <option selected>เลือกรหัสวิชา</option>
            <option value={"ว30203"}>ว30203 (ภาคเรียนที่ 1)</option>
            <option value={"ว30204"}>ว30204 (ภาคเรียนที่ 2)</option>
          </select>
        </div>
        <div>
          <div className="row mt-3">
            <div className="col">
              <div className="mb-3">
                <label>
                  ชื่อ (<strong class="text-danger">ไม่มีคำนำหน้า</strong>)
                </label>
                <input
                  value={Fname}
                  onChange={(v) => setFname(v.target.value)}
                  placeholder="ตัวอย่าง : รักเรียน"
                  type="text"
                  class="form-control"
                />
              </div>
              <div>
                <label>นามสกุล</label>
                <input
                  value={Lname}
                  onChange={(v) => setLname(v.target.value)}
                  placeholder="ตัวอย่าง : ทำดี"
                  type="text"
                  class="form-control"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label>เลขที่</label>
                <input
                  value={Number}
                  onChange={(v) => setNumber(v.target.value)}
                  placeholder="ตัวอย่าง : 16"
                  type="number"
                  class="form-control"
                />
              </div>
              <div>
                <label>ห้อง</label>
                <input
                  value={Room}
                  onChange={(v) => setRoom(v.target.value)}
                  placeholder="ห้อง"
                  type="number"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="d-grid gap-2">
          <button type="submit" className=" btn btn-success">
            {Loading ? (
              <i class="fas fa-circle-notch fa-spin"></i>
            ) : (
              "Generator"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
