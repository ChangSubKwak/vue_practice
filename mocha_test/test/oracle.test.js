var oracledb = require('oracledb');

var config = {
    user: "",
    password: "",
    connectString: ""
}

oracledb.getConnection(config, (err, conn) =>{
    todoWork(err, conn);
});

function todoWork(err, connection) {
	if (err) {
		console.error(err.message);
		return;
	}
	connection.execute("SELECT * FROM IF_TR_HEADER WHERE ROWNUM <= 2", [], function (err, result) {
		if (err) {
			console.error(err.message);
			doRelease(connection);
			return;
		}
		//console.log(result.metaData);   //테이블 스키마
		console.log(result.rows);       //데이터
		doRelease(connection);
	});
}

function doRelease(connection) {
	connection.release(function (err) {
		if (err) {
			console.error(err.message);
		}
	});
}