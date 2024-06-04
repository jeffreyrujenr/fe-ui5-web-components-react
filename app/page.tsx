"use client";

import employeeIcon from "@ui5/webcomponents-icons/dist/employee.js";
import {
  AnalyticalTable,
  Avatar,
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  CheckBox,
  ComboBox,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FilterBar,
  FilterGroupItem,
  Input,
  MultiComboBox,
  MultiInput,
  RadioButton,
  RatingIndicator,
  Select,
  ShellBar,
  StepInput,
  Switch,
  ThemeProvider,
  TimePicker,
} from "@ui5/webcomponents-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "../data.json";
import Link from "next/link";

// const tableData = new Array(500).fill(null).map((_, index) => {
//   return {
//     name: `name${index + 1}`,
//     age: Math.floor(Math.random() * 100),
//     friend: {
//       name: `friend.Name${index}`,
//       age: Math.floor(Math.random() * 100),
//     },
//   };
// });

const tableData = data;

tableData.forEach((item) => {
  if (item.poster_path)
    item.poster_path = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
  if (item.backdrop_path)
    item.backdrop_path = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`;
});

const tableColumns = [
  {
    Header: "Poster",
    Cell: ({ cell, row }) => {
      if (row.original.poster_path)
        return (
          <Image
            src={row.original.poster_path}
            alt=""
            width={100}
            height={150}
          />
        );
    },
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Language",
    accessor: "original_language",
  },
  {
    Header: "Release Date",
    accessor: "release_date",
  },
  {
    Header: "Runtime",
    accessor: "runtime",
  },
  {
    Header: "Reviews",
    accessor: "vote_average",
  },
  {
    Header: "Revenue",
    accessor: "revenue",
  },
  {
    Header: "Adult",
    accessor: "adult",
  },
  {
    Header: "Details",
    Cell: ({ cell, row }) => {
      const queryString = (id, obj) => {
        const params = new URLSearchParams();
        params.set(id, JSON.stringify(obj));
        return params.toString();
      };
      return (
        <Link
          href={
            "/objectPage" + "?" + queryString(row.original.id, row.original)
          }
        >
          Explore
        </Link>
      );
    },
  },
];

export default function Page() {
  return (
    <ThemeProvider staticCssInjected>
      <ShellBar
        logo={
          <Image
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt={"UI5 Web Components for React logo"}
            onClick={() => router.push("/")}
            width={32}
            height={32}
          />
        }
        primaryTitle="UI5 Web Components for React | List Report"
        profile={<Avatar icon={employeeIcon} />}
      />
      {/* Add your code here */}
      <DynamicPage
        backgroundDesign="Solid"
        headerTitle={
          <DynamicPageTitle
            actions={
              <>
                <Button design="Emphasized">Emphasized</Button>
                <Button disabled>Disabled</Button>
                <Button design="Transparent">Transparent</Button>
                <Button design="Attention">Attention</Button>
                <Button design="Default">Default</Button>
                <Button design="Negative">Negative</Button>
                <Button design="Positive">Positive</Button>
              </>
            }
            breadcrumbs={
              <Breadcrumbs>
                <BreadcrumbsItem onClick={() => router.push("/</Breadcrumbs>")}>
                  List Report
                </BreadcrumbsItem>
              </Breadcrumbs>
            }
            header={<>Header</>}
            subHeader={<>Sub-header</>}
            navigationActions={
              <>
                <Button design="Emphasized">Nav Emphasized</Button>
                <Button disabled>Nav Disabled</Button>
                <Button design="Transparent">Nav Transaparent</Button>
                <Button design="Attention">Nav Attention</Button>
                <Button design="Default">Nav Default</Button>
                <Button design="Negative">Nav Negative</Button>
                <Button design="Positive">Nav Positive</Button>
              </>
            }
            showSubHeaderRight={false}
            // actionsToolbarProps={}
            // navigationActionsToolbarProps={}
            expandedContent={<>Expanded Content</>}
            snappedContent={<>Snapped Content</>}
          ></DynamicPageTitle>
          // <FlexBox alignItems="Center" justifyContent="SpaceBetween">
          //   <Title level="H3" style={sapUiSmallMargin}>
          //     LR Title
          //   </Title>
          //   <FlexBox>
          //     <Button style={sapUiTinyMargin}>Custom Action 1</Button>
          //     <Button disabled style={sapUiTinyMargin}>
          //       Custom Action 2
          //     </Button>
          //     <Button style={sapUiTinyMargin}>Custom Action 3</Button>
          //     <Button
          //       style={sapUiTinyMargin}
          //       icon={actionIcon}
          //       design="Transparent"
          //     />
          //   </FlexBox>
          // </FlexBox>
        }
        headerContent={
          <DynamicPageHeader headerPinned={false} topHeaderHeight={1000}>
            <FilterBar
              search={<Input />}
              header={<>Header</>}
              filterContainerWidth={"12rem"}
              hideToolbar={false}
              filterBarCollapsed={false}
              considerGroupName={false}
              showClearOnFB
              showGoOnFB
              hideFilterConfiguration={false}
              showResetButton
              hideToggleFiltersButton={false}
              activeFiltersCount={5}
              showRestoreOnFB
              enableReordering
              // portalContainer={}
              onToggleFilters={() => {}}
              onFiltersDialogSave={() => {}}
              onFiltersDialogCancel={() => {}}
              onFiltersDialogOpen={() => {}}
              onAfterFiltersDialogOpen={() => {}}
              onFiltersDialogClose={() => {}}
              onFiltersDialogSelectionChange={() => {}}
              onFiltersDialogSearch={() => {}}
              onClear={() => {}}
              onGo={() => {}}
              onRestore={() => {}}
            >
              <FilterGroupItem label="Checkbox">
                <CheckBox />
              </FilterGroupItem>
              <FilterGroupItem label="Combobox">
                <ComboBox />
              </FilterGroupItem>
              <FilterGroupItem label="Date picker">
                <DatePicker />
              </FilterGroupItem>
              <FilterGroupItem label="Date range picker">
                <DateRangePicker />
              </FilterGroupItem>
              <FilterGroupItem label="Date time picker">
                <DateTimePicker />
              </FilterGroupItem>
              <FilterGroupItem
                label="Input"
                groupName=""
                labelTooltip=""
                loading={false}
                required
                visible
                visibleInFilterBar
                considerGroupName
                active
                orderId=""
                data-selected
                data-react-key={1}
                data-index={1}
              >
                <Input />
              </FilterGroupItem>
              <FilterGroupItem label="Multi-combobox">
                <MultiComboBox />
              </FilterGroupItem>
              <FilterGroupItem label="Multi-input">
                <MultiInput />
              </FilterGroupItem>
              <FilterGroupItem label="Radio Button">
                <RadioButton />
              </FilterGroupItem>
              <FilterGroupItem label="Rating Indicator">
                <RatingIndicator />
              </FilterGroupItem>
              <FilterGroupItem label="Select">
                <Select />
              </FilterGroupItem>
              <FilterGroupItem label="Step input">
                <StepInput />
              </FilterGroupItem>
              <FilterGroupItem label="Switch">
                <Switch />
              </FilterGroupItem>
              <FilterGroupItem label="Time picker">
                <TimePicker />
              </FilterGroupItem>
            </FilterBar>
          </DynamicPageHeader>
        }
        alwaysShowContentHeader
        showHideHeaderButton
        headerContentPinnable
        // footer={
        //   <Bar
        //     design="FloatingFooter"
        //     endContent={
        //       <>
        //         <Button design="Positive">Accept</Button>
        //         <Button design="Negative">Reject</Button>
        //       </>
        //     }
        //   />
        // }
        headerCollapsed={false}
        preserveHeaderStateOnScroll
      >
        {/*<FlexBox*/}
        {/*    justifyContent={FlexBoxJustifyContent.Center}*/}
        {/*    wrap={FlexBoxWrap.Wrap}*/}
        {/*    style={spacing.sapUiContentPadding}*/}
        {/*>*/}
        {/*<MyCustomElement />*/}
        {/*<LineOrBarChartCard switchToChart={switchToChart} onClick={handleHeaderClick} toggleCharts={toggleCharts} contentTitle={contentTitle} loading={loading}/>*/}
        {/*<ListCard onClick={handleProgressHeaderClick}/>*/}
        {/* <Card
        header={
          <CardHeader
            titleText="Table Title"
            avatar={<Icon name={tableViewIcon} />}
          />
        }
        style={{ ...spacing.sapUiContentPadding }}
      >
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          visibleRows={20}
          style={{ ...spacing.sapUiContentPadding }}
          onRowClick={() => navigate("/detail")}
        />
      </Card> */}
        {/*</FlexBox>*/}
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          header={<></>}
          sortable
          filterable
          visibleRows={50}
          minRows={10}
          groupable
          // groupBy={["original_language"]}
          selectedRowIds={{
            3: true,
            5: true,
            7: true,
          }}
          withRowHighlight
          infiniteScroll
          infiniteScrollThreshold={50}
          // subRowsKey=""
          isTreeTable={false}
          scaleWidthMode="Smart"
          selectionMode="MultiSelect"
          selectionBehavior="RowSelector"
          overscanCountHorizontal={10}
          visibleRowCountMode="Fixed"
          extension={<></>}
          additionalEmptyRowsCount={10}
          // adjustTableHeightOnPopIn
          // loading
          // showOverlay
          noDataText="Loading Data..."
          rowHeight={150}
          headerRowHeight={40}
          retainColumnWidth
          alternateRowColor
          withNavigationHighlight
          highlightField={"status"}
          // scaleXFactor={}
          columnOrder={[]}
          globalFilterValue=""
          // reactTableOptions={}
          tableHooks={[]}
          overscanCount={10}
          // renderRowSubComponent={}
          subComponentsBehavior="Expandable"
          // portalContainer={}
          // markNavigatedRow={}
          onSort={() => {}}
          onGroup={() => {}}
          onRowSelect={() => {}}
          onRowClick={() => {}}
          onRowExpandChange={() => {}}
          onColumnsReorder={() => {}}
          onLoadMore={() => {}}
          onTableScroll={() => {}}
          // NoDataComponent={}
          // LoadingComponent={}
          // tableInstance={}
        ></AnalyticalTable>
      </DynamicPage>
    </ThemeProvider>
  );
}
