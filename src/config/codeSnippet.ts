export const codeSnippetMap: { [extra: string]: string } = {
  commonTable: `import { CommonTable, setPagination } from "ta-biz";
import { Modal } from "antd";
import { withRoleTableBotton } from "yss-biz";

const bindState = ["pagination"];

function TestExample(props) {
//表格内按钮
const ButtonTableType = (item) => {
    return [
    {
        name: "编辑",
        roule: true,
        func: (e, item) => {}
    },
    {
        name: "删除",
        roule: true,
        func: (item, v) => {
        Modal["confirm"]({
            title: "是否要删除数据？",
            content: "是否要删除数据？",
            onOk() {},
            onCancel() {}
        });
        }
    }
    ];
};

const columns = [
    {
    title: "序号",
    dataIndex: "key",
    align: "center",
    key: "key",
    width: 80,
    ellipsis: true
    },
    {
    title: "操作",
    key: "operation",
    width: 250,
    align: "left",
    fixed: "right",
    render: (row) => {
        return withRoleTableBotton(ButtonTableType(row))(row);
    }
    }
];

/**翻页器操作**/
const changePagination = (reqPage, reqPageSize) => {};

const pagination = setPagination(
    props,
    "pagination",
    changePagination,
    changeSync
);

return (
    <CommonTable
    dataSource={[]}
    columns={columns}
    rowKey={"id"}
    resizable={false}
    colDraggable={false}
    rowSelection={rowSelection}
    pagination={pagination}
    />
);
}`,
  addMenu: `
/**
 * @date 2020/6/12
 * 打开新页签
 * @param url    新打开标签页的地址-必须
 * @param title  新打开标签页的标题-必须
 */
export function addMenu(
  url,
  title,
  menuCode, //菜单code码
  routeParams = {}, //参数
  refresh = true, //再次打开刷新界面
  bool = false
) {
  let dev = process.env.NODE_ENV === "development";

  if (!dev && !bool) {
    const type = "addTab";
    bizUtils.postFatherMessage(type, url, menuCode, title, routeParams, refresh);
  } else {
    // 本地环境

    if (!this) return message.warn("本地环境跳转使用: addMenu.call(props.history, menuAddress, menuName, menuCode)");
    const path = url.split("#")[1];
    this.push({
      pathname: path,
      state: routeParams
    });
  }
}`,

  searchForm: `
import { SearchForm } from "yss-biz";

function TestExample(props) {
  // 处理查询
  const handleSearch = (values) => {
    // asyncHttpGetFundHugeRedeem(values);
  };

  // 查询框
  const formItems = [
    {
      name: "fundCodes",
      label: "产品名称",
      type: "Select",
      options: allPrdCodes || [],
      props: {
        placeholder: "多选，默认查询所有",
        mode: "multiple"
      }
    }
  ];
  return (
    <SearchForm
      labelSize="6em"
      itemSize="230px"
      lineOf={4}
      formItem={formItems}
      handleSearch={handleSearch}
    />
  );
}


// asnyc文件---分页查询
  async httpGetFundHugeRedeem(state, params, { getState }) {
    const pagination = state.get("pagination").toJS();
    const searchParams = state.get("searchParams").toJS();
    const newParams = {
      ...searchParams,
      pageNum: pagination.current,
      pageSize: pagination.pageSize,
      ...params
    };
    const res = await getFundHugeRedeem(newParams);
    const { code, data } = res;
    if (code === "200" && data) {
      pagination.total = parseInt(data.total);
      pagination.current = newParams.pageNum;
      pagination.pageSize = newParams.pageSize;

      return getState().merge({
        pagination,
        searchParams: newParams,
        dataSource: data.list || []
      });
    }
  }
`
};
