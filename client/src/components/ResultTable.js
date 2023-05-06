import { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

const ResultTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => {
        setData(res);
      }
    );
  });

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data && (
            <tr>
              <td>No data found</td>
            </tr>
          )}
          {data &&
            data.map((val, i) => (
              <tr className="table-body" key={i}>
                <td>{val?.username || ""}</td>
                <td>{val?.attempts || 0}</td>
                <td>{val?.points || 0}</td>
                <td>{val?.achieved || ""}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
