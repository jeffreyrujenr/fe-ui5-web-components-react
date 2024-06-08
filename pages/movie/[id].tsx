import {
  Breadcrumbs,
  BreadcrumbsItem,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  Link,
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
} from "@ui5/webcomponents-react/ssr";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { fetchMovieById } from "../api/movies/[id]";

interface Props {
  // TODO: add movie type
  movie: any;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { id } = context.params!;
  const movie = await fetchMovieById(id as string);
  return { props: { movie } };
};

export default function MovieDetails({ movie }) {
  return (
    <ObjectPage
      mode="Default"
      // showHideHeaderButton
      selectedSectionId={"overview"}
      selectedSubSectionId={""}
      // headerContentPinnable
      headerContent={
        <DynamicPageHeader topHeaderHeight={1000}>
          <h3>Overview</h3>
          <p style={{ width: "640px" }}>{movie.overview}</p>
        </DynamicPageHeader>
      }
      headerTitle={
        <DynamicPageTitle
          // actions={}
          breadcrumbs={
            <Breadcrumbs>
              <BreadcrumbsItem>Movies</BreadcrumbsItem>
              <BreadcrumbsItem>
                <Link href={`/movie/${movie.id}`}>{movie.id}</Link>
              </BreadcrumbsItem>
            </Breadcrumbs>
          }
          header={movie.title}
          subHeader={movie.tagline}
          // navigationActions={}
          showSubHeaderRight={false}
          // actionsToolbarProps={}
          // navigationActionsToolbarProps={}
          // expandedContent={}
          // snappedContent={}
        ></DynamicPageTitle>
      }
      alwaysShowContentHeader
      placeholder={""}
      onBeforeNavigate={() => {}}
      onSelectedSectionChange={() => {}}
      onToggleHeaderContent={() => {}}
      onPinnedStateChange={() => {}}
    >
      <ObjectPageSection
        id="poster-and-backdrop"
        titleText="Poster and Backdrop"
      >
        <FlexBox direction="Row" alignItems="Center">
          <div>
            <h3>Poster</h3>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              width={240}
              height={360}
              alt={movie.title}
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
                margin: "1rem 0",
              }}
            />
          </div>
          <div style={{ marginLeft: "5rem" }}>
            <h3>Backdrop</h3>
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              width={640}
              height={360}
              alt={movie.title}
              style={{
                borderRadius: "0.5rem",
                boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
                margin: "1rem 0",
              }}
            />
          </div>
        </FlexBox>
      </ObjectPageSection>
      <ObjectPageSection id="basic-information" titleText="Basic Information">
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Original Language: {movie.original_language}</p>
        <p>Status: {movie.status}</p>
        <p>IMDI ID: {movie.imdb_id}</p>
      </ObjectPageSection>
      <ObjectPageSection id="production-details" titleText="Production Details">
        <p>Budget: {movie.budget}</p>
        <p>Revenue: {movie.revenue}</p>
        <ObjectPageSubSection
          id="production-companies"
          titleText="Production Companies"
          style={{ width: "50%" }}
        >
          <ol>
            {movie.production_companies.map((company) => (
              <li key={company.id}>
                {/* <Image
                src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                alt={company.name}
                width={64}
                height={64}
                /> */}
                <p>
                  {company.name}, {company.origin_country}
                </p>
              </li>
            ))}
          </ol>
        </ObjectPageSubSection>
        <ObjectPageSubSection
          id="production-countries"
          titleText="Production Countries"
          style={{ width: "50%" }}
        >
          <ol>
            {movie.production_countries.map((country) => (
              <li key={country.iso_3166_1}>
                <p>{country.name}</p>
              </li>
            ))}
          </ol>
        </ObjectPageSubSection>
      </ObjectPageSection>
      <ObjectPageSection
        id="ratings-and-popularity"
        titleText="Ratings and Popularity"
      >
        <p>Vote Average: {movie.vote_average}</p>
        <p>Vote Count: {movie.vote_count}</p>
        <p>Popularity: {movie.popularity}</p>
      </ObjectPageSection>
      <ObjectPageSection
        id="additional-information"
        titleText="Additional Information"
      >
        <p>Original Title: {movie.original_title}</p>
        <p>
          Homepage: <Link href={movie.homepage}>{movie.homepage}</Link>
        </p>
        <p>Video: {movie.video ? "Available" : "Not Available"}</p>
        <p>Adult: {movie.adult ? "Yes" : "No"}</p>
      </ObjectPageSection>
    </ObjectPage>
  );
}
