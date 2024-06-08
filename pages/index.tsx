import { fetchMovies, Movie } from "./api/movies";
import {
  AnalyticalTable,
  Breadcrumbs,
  BreadcrumbsItem,
  CheckBox,
  ComboBox,
  DateRangePicker,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FilterBar,
  FilterGroupItem,
  Input,
  Link,
  RatingIndicator,
  Select,
} from "@ui5/webcomponents-react/ssr";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";

const tableColumns = [
  {
    Header: "Poster",
    Cell: ({ row }) => {
      if (row.original?.poster_path) {
        return (
          <Image
            src={`https://image.tmdb.org/t/p/original/${row.original.poster_path}`}
            width={100}
            height={150}
            alt={row.original.title}
            loading="lazy"
            style={{ margin: "0 auto" }}
          />
        );
      } else {
        return <p>No Poster</p>;
      }
    },
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Rating",
    accessor: "vote_average",
  },
  // {
  //   Header: "Genre",
  //   Cell: ({ row }) => {
  //     return row.original.genres?.map((genre) => genre?.name).join(", ");
  //   },
  // },
  {
    Header: "Year",
    accessor: "release_date",
  },
  {
    Header: "Details",
    Cell: ({ row }) => {
      return <Link href={`/movie/${row.original?.id}`}>Show more</Link>;
    },
  },
];

interface Props {
  movies: Movie[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const movies = await fetchMovies();
  return { props: { movies } };
};

export default function Home({ movies }: Props) {
  const [movieList, setMovieList] = useState(movies);
  const [searchValue, setSearchValue] = useState("");
  const [isPosterChecked, setIsPosterChecked] = useState(true);
  const [ratingValue, setRatingValue] = useState(0);
  const [dateRangeValue, setDateRangeValue] = useState("");

  return (
    <>
      <DynamicPage
        backgroundDesign="Solid"
        headerTitle={
          <DynamicPageTitle
            // actions={}
            breadcrumbs={
              <Breadcrumbs>
                <BreadcrumbsItem>
                  <Link href="/">Movies</Link>
                </BreadcrumbsItem>
              </Breadcrumbs>
            }
            header={<h3>Explore movies</h3>}
            // subHeader={}
            // navigationActions={}
            showSubHeaderRight={false}
            // actionsToolbarProps={}
            // navigationActionsToolbarProps={}
            // expandedContent={}
            // snappedContent={}
          ></DynamicPageTitle>
        }
        headerContent={
          <>
            <DynamicPageHeader headerPinned={false} topHeaderHeight={1000}>
              <FilterBar
                // search={}
                // header={}
                // filterContainerWidth={}
                hideToolbar={false}
                filterBarCollapsed={false}
                considerGroupName={false}
                showClearOnFB
                showGoOnFB
                hideFilterConfiguration={false}
                showResetButton
                hideToggleFiltersButton={false}
                // activeFiltersCount={}
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
                onFiltersDialogSearch={(e) => {}}
                onClear={() => {
                  setSearchValue("");
                  setIsPosterChecked(true);
                  setRatingValue(0);
                  setDateRangeValue("");
                }}
                onGo={() => {
                  if (searchValue) {
                    const filteredMovies = movieList.filter((movie) =>
                      movie.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    );
                    setMovieList(filteredMovies);
                  }

                  if (isPosterChecked === true) {
                    const moviesWithPoster = movieList.filter(
                      (movie) => movie.poster_path !== null
                    );
                    setMovieList(moviesWithPoster);
                  } else {
                    const moviesWithPoster = movieList.filter(
                      (movie) => movie.poster_path === null
                    );
                    setMovieList(moviesWithPoster);
                  }

                  if (ratingValue) {
                    const moviesAboveRating = movieList.filter(
                      (movie) => movie.vote_average >= ratingValue
                    );
                    setMovieList(moviesAboveRating);
                  }

                  if (dateRangeValue) {
                    const [start, end] = dateRangeValue.split(" - ");
                    const startDate = new Date(start);
                    const endDate = new Date(end);
                    const moviesWithinRange = movieList.filter(
                      (movie) =>
                        movie.release_date >= startDate &&
                        movie.release_date <= endDate
                    );
                    setMovieList(moviesWithinRange);
                  }

                  setSearchValue("");
                  setIsPosterChecked(true);
                  setRatingValue(0);
                  setDateRangeValue("");
                }}
                onRestore={() => {
                  setMovieList(movies);
                  setSearchValue("");
                  setIsPosterChecked(true);
                  setRatingValue(0);
                  setDateRangeValue("");
                }}
              >
                <FilterGroupItem label="Search Movie">
                  <Input
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                  />
                </FilterGroupItem>
                <FilterGroupItem label="Poster">
                  <CheckBox
                    checked={isPosterChecked}
                    onChange={() => {
                      setIsPosterChecked(!isPosterChecked);
                    }}
                  />
                </FilterGroupItem>
                {/* <FilterGroupItem label="Combobox">
                  <ComboBox />
                </FilterGroupItem> */}
                {/* <FilterGroupItem label="Select">
                  <Select />
                </FilterGroupItem> */}
                <FilterGroupItem label="Ratings">
                  <RatingIndicator
                    onChange={(e) => {
                      setRatingValue(e.target.value);
                    }}
                  />
                </FilterGroupItem>
                <FilterGroupItem label="Release Date">
                  <DateRangePicker
                    onChange={(e) => {
                      setDateRangeValue(e.target.value);
                    }}
                  />
                </FilterGroupItem>
              </FilterBar>
            </DynamicPageHeader>
          </>
        }
        alwaysShowContentHeader
        // showHideHeaderButton
        // headerContentPinnable
        // footer={}
        // headerCollapsed
        preserveHeaderStateOnScroll
      >
        <AnalyticalTable
          data={movieList}
          columns={tableColumns}
          // header={}
          sortable
          filterable
          visibleRows={50}
          minRows={10}
          groupable
          // groupBy={[]}
          selectedRowIds={{}}
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
          rowHeight={200}
          headerRowHeight={48}
          retainColumnWidth
          alternateRowColor
          withNavigationHighlight
          // highlightField={}
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
    </>
  );
}
