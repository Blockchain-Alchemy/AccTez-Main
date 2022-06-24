// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 68wGqrWvUbUk9uG76N3xHk
// Component: mI1RRebNRD
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: UCG438gq_ly/component
import Menu from "../../Menu"; // plasmic-import: Mbanvkt3Am/component
import Checkbox from "../../Checkbox"; // plasmic-import: NK-xeF1iGEb/component

import { useScreenVariants as useScreenVariantsvuY9FrfZklWci } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vuY9frfZKLWci/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_acc_tez_wizard.module.css"; // plasmic-import: 68wGqrWvUbUk9uG76N3xHk/projectcss
import sty from "./PlasmicMain.module.css"; // plasmic-import: mI1RRebNRD/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gYo0rjvqId9/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: XoAtNs3eY9L/icon

export type PlasmicMain__VariantMembers = {};

export type PlasmicMain__VariantsArgs = {};
type VariantPropType = keyof PlasmicMain__VariantsArgs;
export const PlasmicMain__VariantProps = new Array<VariantPropType>();

export type PlasmicMain__ArgsType = {};
type ArgPropType = keyof PlasmicMain__ArgsType;
export const PlasmicMain__ArgProps = new Array<ArgPropType>();

export type PlasmicMain__OverridesType = {
  root?: p.Flex<"div">;
  acctez?: p.Flex<"h1">;
  button?: p.Flex<typeof Button>;
  buySpecialPassButton?: p.Flex<typeof Button>;
  buyDayPassButton?: p.Flex<typeof Button>;
  buyWeeklyPassButton?: p.Flex<typeof Button>;
  buyYearlyPassButton?: p.Flex<typeof Button>;
  ownedSpecialPass?: p.Flex<typeof Checkbox>;
  ownedDayPass?: p.Flex<typeof Checkbox>;
  ownedWeeklyPass?: p.Flex<typeof Checkbox>;
  ownedYearlyPass?: p.Flex<typeof Checkbox>;
  specialEventLink?: p.Flex<"a">;
  dayPassLink?: p.Flex<"a">;
  weeklyPassLink?: p.Flex<"a">;
  yearlyPassLink?: p.Flex<"a">;
  addTicketToAppleWallet?: p.Flex<typeof Button>;
};

export interface DefaultMainProps {
  className?: string;
}

export const defaultMain__Args: Partial<PlasmicMain__ArgsType> = {};

function PlasmicMain__RenderFunc(props: {
  variants: PlasmicMain__VariantsArgs;
  args: PlasmicMain__ArgsType;
  overrides: PlasmicMain__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultMain__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvuY9FrfZklWci()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__qWjZ1)}>
              <h1
                data-plasmic-name={"acctez"}
                data-plasmic-override={overrides.acctez}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.acctez
                )}
              >
                {"AccTez "}
              </h1>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gvr97
                  )}
                >
                  {"Access Control with Tezos"}
                </div>
              ) : null}

              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Sync"}
              </Button>
            </div>
          ) : null}

          <Menu className={classNames("__wab_instance", sty.menu__g0Qdg)} />

          <div className={classNames(projectcss.all, sty.columns__voDoz)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__k0VJh)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3FYu4
                )}
              >
                {"Buy a Pass"}
              </div>

              <Button
                data-plasmic-name={"buySpecialPassButton"}
                data-plasmic-override={overrides.buySpecialPassButton}
                className={classNames(
                  "__wab_instance",
                  sty.buySpecialPassButton
                )}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Special Event Pass"}
              </Button>

              <Button
                data-plasmic-name={"buyDayPassButton"}
                data-plasmic-override={overrides.buyDayPassButton}
                className={classNames("__wab_instance", sty.buyDayPassButton)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Day Pass"}
              </Button>

              <Button
                data-plasmic-name={"buyWeeklyPassButton"}
                data-plasmic-override={overrides.buyWeeklyPassButton}
                className={classNames(
                  "__wab_instance",
                  sty.buyWeeklyPassButton
                )}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Week Pass"}
              </Button>

              <Button
                data-plasmic-name={"buyYearlyPassButton"}
                data-plasmic-override={overrides.buyYearlyPassButton}
                className={classNames(
                  "__wab_instance",
                  sty.buyYearlyPassButton
                )}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Yearly Pass"}
              </Button>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__wLjh4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fYyJ
                )}
              >
                {"Your Status"}
              </div>

              <div className={classNames(projectcss.all, sty.columns__f4YnG)}>
                <div className={classNames(projectcss.all, sty.column__xEU)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iu21K)}
                  >
                    <Checkbox
                      data-plasmic-name={"ownedSpecialPass"}
                      data-plasmic-override={overrides.ownedSpecialPass}
                      className={classNames(
                        "__wab_instance",
                        sty.ownedSpecialPass
                      )}
                      isDisabled={true}
                    >
                      {"You Own Special Event Pass"}
                    </Checkbox>

                    <Checkbox
                      data-plasmic-name={"ownedDayPass"}
                      data-plasmic-override={overrides.ownedDayPass}
                      className={classNames("__wab_instance", sty.ownedDayPass)}
                      isDisabled={true}
                    >
                      {"You Own Day Pass"}
                    </Checkbox>

                    <Checkbox
                      data-plasmic-name={"ownedWeeklyPass"}
                      data-plasmic-override={overrides.ownedWeeklyPass}
                      className={classNames(
                        "__wab_instance",
                        sty.ownedWeeklyPass
                      )}
                      isDisabled={true}
                    >
                      {"You Own Weekly Pass"}
                    </Checkbox>

                    <Checkbox
                      data-plasmic-name={"ownedYearlyPass"}
                      data-plasmic-override={overrides.ownedYearlyPass}
                      className={classNames(
                        "__wab_instance",
                        sty.ownedYearlyPass
                      )}
                      isDisabled={true}
                    >
                      {"You Own Yearly Pass"}
                    </Checkbox>
                  </div>
                </div>

                <div className={classNames(projectcss.all, sty.column__ovby)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ho7P9)}
                  >
                    <a
                      data-plasmic-name={"specialEventLink"}
                      data-plasmic-override={overrides.specialEventLink}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.specialEventLink
                      )}
                      href={"https://www.plasmic.app/" as const}
                    >
                      {"Go to the Page"}
                    </a>

                    <a
                      data-plasmic-name={"dayPassLink"}
                      data-plasmic-override={overrides.dayPassLink}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.dayPassLink
                      )}
                      href={"https://www.plasmic.app/" as const}
                    >
                      {"Go to the Page"}
                    </a>

                    <a
                      data-plasmic-name={"weeklyPassLink"}
                      data-plasmic-override={overrides.weeklyPassLink}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.weeklyPassLink
                      )}
                      href={"https://www.plasmic.app/" as const}
                    >
                      {"Go to the Page"}
                    </a>

                    <a
                      data-plasmic-name={"yearlyPassLink"}
                      data-plasmic-override={overrides.yearlyPassLink}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.yearlyPassLink
                      )}
                      href={"https://www.plasmic.app/" as const}
                    >
                      {"Go to the Page"}
                    </a>
                  </div>
                </div>
              </div>

              <Button
                data-plasmic-name={"addTicketToAppleWallet"}
                data-plasmic-override={overrides.addTicketToAppleWallet}
                className={classNames(
                  "__wab_instance",
                  sty.addTicketToAppleWallet
                )}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Add Ticket to Apple Wallet"}
              </Button>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "acctez",
    "button",
    "buySpecialPassButton",
    "buyDayPassButton",
    "buyWeeklyPassButton",
    "buyYearlyPassButton",
    "ownedSpecialPass",
    "ownedDayPass",
    "ownedWeeklyPass",
    "ownedYearlyPass",
    "specialEventLink",
    "dayPassLink",
    "weeklyPassLink",
    "yearlyPassLink",
    "addTicketToAppleWallet"
  ],
  acctez: ["acctez"],
  button: ["button"],
  buySpecialPassButton: ["buySpecialPassButton"],
  buyDayPassButton: ["buyDayPassButton"],
  buyWeeklyPassButton: ["buyWeeklyPassButton"],
  buyYearlyPassButton: ["buyYearlyPassButton"],
  ownedSpecialPass: ["ownedSpecialPass"],
  ownedDayPass: ["ownedDayPass"],
  ownedWeeklyPass: ["ownedWeeklyPass"],
  ownedYearlyPass: ["ownedYearlyPass"],
  specialEventLink: ["specialEventLink"],
  dayPassLink: ["dayPassLink"],
  weeklyPassLink: ["weeklyPassLink"],
  yearlyPassLink: ["yearlyPassLink"],
  addTicketToAppleWallet: ["addTicketToAppleWallet"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  acctez: "h1";
  button: typeof Button;
  buySpecialPassButton: typeof Button;
  buyDayPassButton: typeof Button;
  buyWeeklyPassButton: typeof Button;
  buyYearlyPassButton: typeof Button;
  ownedSpecialPass: typeof Checkbox;
  ownedDayPass: typeof Checkbox;
  ownedWeeklyPass: typeof Checkbox;
  ownedYearlyPass: typeof Checkbox;
  specialEventLink: "a";
  dayPassLink: "a";
  weeklyPassLink: "a";
  yearlyPassLink: "a";
  addTicketToAppleWallet: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMain__VariantsArgs;
    args?: PlasmicMain__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMain__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMain__ArgProps,
      internalVariantPropNames: PlasmicMain__VariantProps
    });

    return PlasmicMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMain";
  } else {
    func.displayName = `PlasmicMain.${nodeName}`;
  }
  return func;
}

export const PlasmicMain = Object.assign(
  // Top-level PlasmicMain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    acctez: makeNodeComponent("acctez"),
    button: makeNodeComponent("button"),
    buySpecialPassButton: makeNodeComponent("buySpecialPassButton"),
    buyDayPassButton: makeNodeComponent("buyDayPassButton"),
    buyWeeklyPassButton: makeNodeComponent("buyWeeklyPassButton"),
    buyYearlyPassButton: makeNodeComponent("buyYearlyPassButton"),
    ownedSpecialPass: makeNodeComponent("ownedSpecialPass"),
    ownedDayPass: makeNodeComponent("ownedDayPass"),
    ownedWeeklyPass: makeNodeComponent("ownedWeeklyPass"),
    ownedYearlyPass: makeNodeComponent("ownedYearlyPass"),
    specialEventLink: makeNodeComponent("specialEventLink"),
    dayPassLink: makeNodeComponent("dayPassLink"),
    weeklyPassLink: makeNodeComponent("weeklyPassLink"),
    yearlyPassLink: makeNodeComponent("yearlyPassLink"),
    addTicketToAppleWallet: makeNodeComponent("addTicketToAppleWallet"),

    // Metadata about props expected for PlasmicMain
    internalVariantProps: PlasmicMain__VariantProps,
    internalArgProps: PlasmicMain__ArgProps
  }
);

export default PlasmicMain;
/* prettier-ignore-end */
