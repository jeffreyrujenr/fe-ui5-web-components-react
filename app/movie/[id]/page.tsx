"use client";

import employeeIcon from "@ui5/webcomponents-icons/dist/employee.js";

import {
  Avatar,
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  Form,
  FormGroup,
  FormItem,
  Label,
  MessageStrip,
  ObjectPage,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectStatus,
  ShellBar,
  Text,
  ThemeProvider,
} from "@ui5/webcomponents-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [movie, setMovie] = useState({
    adult: false,
    backdrop_path: "/cXQH2u7wUIX1eoIdEj51kHXoWhX.jpg",
    belongs_to_collection: null,
    budget: 1350000,
    genres: [
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
    ],
    homepage:
      "http://www.universalstudiosentertainment.com/lock-stock-and-two-smoking-barrels/",
    id: 100,
    imdb_id: "tt0120735",
    origin_country: ["GB"],
    original_language: "en",
    original_title: "Lock, Stock and Two Smoking Barrels",
    overview:
      "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
    popularity: 17.142,
    poster_path: "/wt2TRBmFmBn5M5MBcPTwovlREaB.jpg",
    production_companies: [
      {
        id: 491,
        logo_path: "/5LvDUt3KmvRnXQ4NrdWJYHeuA8J.png",
        name: "Summit Entertainment",
        origin_country: "US",
      },
      {
        id: 21920,
        logo_path: null,
        name: "The Steve Tisch Company",
        origin_country: "",
      },
      {
        id: 13419,
        logo_path: null,
        name: "SKA Films",
        origin_country: "GB",
      },
      {
        id: 1382,
        logo_path: "/8b5XGJ8YhZoEo9LgFP8KRQWHjYL.png",
        name: "PolyGram Filmed Entertainment",
        origin_country: "US",
      },
      {
        id: 20076,
        logo_path: "/i9qXGJIP9fGN22PP5jXUVENbyHi.png",
        name: "Handmade Films",
        origin_country: "GB",
      },
    ],
    production_countries: [
      { iso_3166_1: "GB", name: "United Kingdom" },
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "1998-08-28",
    revenue: 28356188,
    runtime: 105,
    spoken_languages: [
      { english_name: "English", iso_639_1: "en", name: "English" },
    ],
    status: "Released",
    tagline: "A Disgrace to Criminals Everywhere.",
    title: "Lock, Stock and Two Smoking Barrels",
    video: false,
    vote_average: 8.122,
    vote_count: 6365,
  });
  const router = useRouter();

  // useEffect(() => {
  //   const id = searchParams.get("id");

  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWQ2NjNjMmNmNGE3YmJjZWUxMGU2MjBkM2Q2MWM0NyIsInN1YiI6IjY2NWQ1YjFjOWEzYTQ2MGVmMWFiNDhjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TMM6ZMoleALYyAoqvw0xogE0nbBm2ln9oeD3qr_rSY8",
  //     },
  //   };

  //   const getMovie = async (id) => {
  //     console.log(id);
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}`,
  //       options
  //     );
  //     const data = await response.json();
  //     setMovie(data);
  //     console.log(data);
  //   };

  //   return () => {
  //     getMovie(id);
  //   };
  // }, [searchParams]);

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
        primaryTitle="UI5 Web Components for React | Object Page"
        profile={<Avatar icon={employeeIcon} />}
      />
      {/* Add your code here */}
      {params.id}
      <ObjectPage
        mode="Default"
        showHideHeaderButton
        selectedSectionId={"goals"}
        selectedSubSectionId={""}
        headerContentPinnable
        // imageShapeCircle
        // image="https://sap.github.io/ui5-webcomponents-react/assets/Person-B7wHqdJw.png"
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
        headerContent={
          <DynamicPageHeader topHeaderHeight={1000}>
            {/* <FlexBox alignItems="Center">
              <FlexBox direction="Column">
                <Link href="#">+33 6 4512 5158</Link>
                <Link href="#">DeniseSmith@sap.com</Link>
                <Link href="#">
                  https://github.com/SAP/ui5-webcomponents-react
                </Link>
              </FlexBox>
              <FlexBox direction="Column">
                <Label>San Jose</Label>
                <Label>California, USA</Label>
              </FlexBox>
            </FlexBox> */}
          </DynamicPageHeader>
        }
        headerTitle={
          <DynamicPageTitle
            actions={<></>}
            breadcrumbs={
              <Breadcrumbs>
                <BreadcrumbsItem onClick={() => router.push("/")}>
                  List Report
                </BreadcrumbsItem>
                <BreadcrumbsItem onClick={() => router.push("objectPage")}>
                  Object Page
                </BreadcrumbsItem>
              </Breadcrumbs>
            }
            header={<Text></Text>}
            subHeader={<Text></Text>}
            navigationActions={<></>}
            showSubHeaderRight={false}
            //   actionsToolbarProps={}
            //   navigationActionsToolbarProps={}
            // expandedContent={
            //   <MessageStrip>
            //     Information (only visible if header content is expanded)
            //   </MessageStrip>
            // }
            // snappedContent={
            //   <MessageStrip>
            //     Information (only visible if header content is
            //     collapsed/snapped)
            //   </MessageStrip>
            // }
          >
            {/* <ObjectStatus state="Success">Employed</ObjectStatus> */}
          </DynamicPageTitle>
        }
        alwaysShowContentHeader
        placeholder={""}
        onBeforeNavigate={() => {}}
        onSelectedSectionChange={() => {}}
        onToggleHeaderContent={() => {}}
        onPinnedStateChange={() => {}}
      >
        <ObjectPageSection aria-label="Goals" id="goals" titleText="Goals">
          <Form
            columnsL={3}
            columnsM={2}
            columnsXL={3}
            labelSpanL={6}
            labelSpanM={6}
            labelSpanXL={6}
            style={{
              alignItems: "baseline",
            }}
          >
            <FormItem label="Evangelize the UI framework across the company">
              <Text>4 days overdue - Cascaded</Text>
            </FormItem>
            <FormItem label="Get trained in development management direction">
              <Text>Due Nov, 21</Text>
            </FormItem>
            <FormItem label="Mentor junior developers">
              <Text>Due Dec, 31 - Cascaded</Text>
            </FormItem>
          </Form>
        </ObjectPageSection>
        <ObjectPageSection
          aria-label="Personal"
          id="personal"
          titleText="Personal"
        >
          <ObjectPageSubSection
            actions={
              <>
                <Button design="Emphasized" style={{ minWidth: "120px" }}>
                  Custom Action
                </Button>
                <Button
                  design="Transparent"
                  icon="sap-icon://action-settings"
                  tooltip="settings"
                />
                <Button
                  design="Transparent"
                  icon="sap-icon://download"
                  tooltip="download"
                />
              </>
            }
            aria-label="Connect"
            id="personal-connect"
            titleText="Connect"
          >
            <Form
              columnsL={4}
              columnsXL={4}
              style={{
                alignItems: "baseline",
              }}
            >
              <FormGroup titleText="Phone Numbers">
                <FormItem label="Home">
                  <Text>+1 234-567-8901</Text>
                </FormItem>
                <FormItem label="">
                  <Text>+1 234-567-5555</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Social Accounts">
                <FormItem label="LinkedIn">
                  <Text>/DeniseSmith</Text>
                </FormItem>
                <FormItem label="Twitter">
                  <Text>@DeniseSmith</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Addresses">
                <FormItem label="Home Address">
                  <Text>2096 Mission Street</Text>
                </FormItem>
                <FormItem label="Mailing Address">
                  <Text>PO Box 32114</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Mailing Address">
                <FormItem label="Work">
                  <Text>DeniseSmith@sap.com</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Payment Information"
            id="personal-payment-information"
            titleText="Payment Information"
          >
            <Form
              columnsL={4}
              columnsXL={4}
              style={{
                alignItems: "baseline",
              }}
            >
              <FormGroup titleText="Salary">
                <FormItem label="Bank Transfer">
                  <Text>Money Bank, Inc.</Text>
                </FormItem>
              </FormGroup>
              <FormGroup titleText="Payment method for Expenses">
                <FormItem label="Extra Travel Expenses">
                  <Text>Cash 100 USD</Text>
                </FormItem>
              </FormGroup>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
        <ObjectPageSection
          aria-label="Employment"
          id="employment"
          titleText="Employment"
        >
          <ObjectPageSubSection
            aria-label="Job Information"
            id="employment-job-information"
            titleText="Job Information"
          >
            <Form
              columnsL={4}
              columnsXL={4}
              style={{
                alignItems: "baseline",
              }}
            >
              <FormItem label="Job Classification">
                <FlexBox direction="Column">
                  <Text>Senior UI Developer</Text>
                  <Label>(UIDEV-SR)</Label>
                </FlexBox>
              </FormItem>
              <FormItem label="Job Title">
                <Text>Developer</Text>
              </FormItem>
              <FormItem label="Employee Class">
                <Text>Employee</Text>
              </FormItem>
              <FormItem label="Manager">
                <FlexBox direction="Column">
                  <Text>Dan Smith</Text>
                  <Label>Development Manager</Label>
                </FlexBox>
              </FormItem>
              <FormItem label="Pay Grade">
                <Text>Salary Grade 18 (GR-14)</Text>
              </FormItem>
              <FormItem label="FTE">
                <Text>1</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Employee Details"
            id="employment-employee-details"
            titleText="Employee Details"
          >
            <Form
              columnsL={4}
              columnsXL={4}
              style={{
                alignItems: "baseline",
              }}
            >
              <FormItem label="Start Date">
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem label="End Date">
                <Text>Dec 31, 9999</Text>
              </FormItem>
              <FormItem label="Payroll Start Date">
                <Text>Jan 01, 2018</Text>
              </FormItem>
              <FormItem label="Benefits Start Date">
                <Text>Jul 01, 2018</Text>
              </FormItem>
              <FormItem label="Company Car Eligibility">
                <Text>Jan 01, 2021</Text>
              </FormItem>
              <FormItem label="Equity Start Date">
                <Text>Jul 01, 2018</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
          <ObjectPageSubSection
            aria-label="Job Relationship"
            id="employment-job-relationship"
            titleText="Job Relationship"
          >
            <Form
              columnsL={4}
              columnsXL={4}
              style={{
                alignItems: "baseline",
              }}
            >
              <FormItem label="Manager">
                <Text>John Doe</Text>
              </FormItem>
              <FormItem label="Scrum Master">
                <Text>Michael Adams</Text>
              </FormItem>
              <FormItem label="Product Owner">
                <Text>John Miller</Text>
              </FormItem>
            </Form>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>
    </ThemeProvider>
  );
}
