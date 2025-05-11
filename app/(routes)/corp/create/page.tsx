"use client";
// Mock Import
import { corporationNames } from "@/app/mock/corpname";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { postCompanies } from "@/lib/server/companies/postCompanies";

const Page = () => {
  // TS

  // Default Load
  const [getCompaniesLoader, setGetCompaniesLoader] = useState(false);
  const [laodingInput, setLoadingInput] = useState(false);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);
  const [progIndex, setProgIndex] = useState(0);
  const progress = [0, 33, 66, 100];
  const textDesc = [
    "Pick up a name for your Company",
    "Chose a work field for your Company",
    "Decide whether You want to hire people or not",
    "Your Company is Ready to Start Earning, Press Finish",
  ];

  // Dynamic input
  const [message, setMessage] = useState("");
  const [responseError, setResponseError] = useState("");
  const [corpName, setCorpName] = useState("");
  const [workField, setWorkField] = useState("");
  const [autoHire, setAutoHire] = useState(true);
  const [networth, setNetworth] = useState(1000000);
  const [cost, setCost] = useState(0);

  const handleCreateCompany = async () => {
    setGetCompaniesLoader(true);
    setMessage("");
    setResponseError("");
    const response = await postCompanies(corpName, autoHire, workField);
    if (!response) {
      setGetCompaniesLoader(false);
      setResponseError("Unexpected Error");
    }
    if (response?.status) {
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      setMessage(response.message);
    }
    if (response.status == false) {
      setGetCompaniesLoader(false);
      setResponseError(response?.message);
    }
  };

  useEffect(() => {
    function changeStates() {
      if (progIndex == 0) {
        if (corpName.length < 4) setNextButtonDisable(true);
        else setNextButtonDisable(false);
      }
      if (progIndex == 1) {
        if (workField == "") setNextButtonDisable(true);
        else setNextButtonDisable(false);
      }
    }
    changeStates();
    if (progIndex == 3) {
      if (autoHire) setCost(60000 + 500);
      else setCost(500);
    }
  }, [corpName, progIndex, workField]);

  return (
    <Dialog>
      <div className="flex-1 p-[10%] max-w-4xl mx-auto w-full">
        <Card>
          <CardHeader>
            <CardTitle>Corp Creation</CardTitle>
            <CardDescription>
              <p className="mb-2">{textDesc[progIndex]}</p>
              <Progress value={progress[progIndex]} />
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Comp Name */}
            {progIndex == 0 && (
              <div className="relative flex items-center">
                <Input
                  required
                  value={corpName}
                  placeholder="Company name"
                  onChange={(e) => {
                    setCorpName(e.target.value);
                  }}
                />
                <div className="">
                  <Button
                    disabled={laodingInput}
                    onClick={() => {
                      setLoadingInput(true);
                      setTimeout(() => {
                        setCorpName(
                          corporationNames[
                            Math.floor(Math.random() * corporationNames.length)
                          ]
                        );
                        setLoadingInput(false);
                      }, 1000);
                    }}
                    className="w-fit py-1"
                    variant={"outline"}
                  >
                    Generate
                  </Button>
                </div>
              </div>
            )}

            {/* Comp Field */}
            {progIndex == 1 && (
              <Select
                value={workField}
                onValueChange={(e) => {
                  setWorkField(e);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Work field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="agriculture">Agriculture</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Comp auto Hire */}
            {progIndex == 2 && (
              <Select
                value={autoHire == true ? "true" : "false"}
                onValueChange={(e) => {
                  setAutoHire(e == "true" ? true : false);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Auto SetUp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
            )}

            {/* Comp Confirmation */}
            {progIndex == 3 && (
              <div>
                <h3 className="font-semibold">{corpName}</h3>
                <h2>
                  Field:{" "}
                  <span className="capitalize font-semibold">{workField}</span>
                </h2>
                <h3>
                  Hire on creation:{" "}
                  <span
                    className={cn(
                      "font-semibold ",
                      autoHire
                        ? "dark:text-green-300 text-green-800"
                        : "dark:text-red-300 text-red-800"
                    )}
                  >
                    {autoHire ? "Yes" : "No"}
                  </span>
                </h3>
                <Separator className="my-1"></Separator>
                <div className="grid grid-cols-2 grid-rows-2">
                  <div className="">
                    <h3>
                      Creation Fees:{" "}
                      <span className="dark:text-red-300 text-red-800 font-semibold">
                        -$500
                      </span>
                    </h3>
                    <h3>
                      Hiring Fees :{" "}
                      <span
                        className={cn(
                          "font-semibold",
                          autoHire
                            ? "dark:text-red-300 text-red-800"
                            : "dark:text-green-300 text-green-800"
                        )}
                      >
                        {autoHire ? "-$60000.00" : "$0"}
                      </span>{" "}
                    </h3>
                  </div>
                  <div>
                    Credits:{" "}
                    <span className="font-semibold dark:text-green-300 text-green-800">
                      ${networth}
                    </span>
                  </div>
                  <div className="col-span-2 ">
                    <Separator className="my-1"></Separator>
                    Credits After Transaction:{" "}
                    <span className="dark:text-green-300 text-green-800 font-semibold">
                      ${networth - cost}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {" "}
            <div className="flex items-center justify-end w-full">
              {progIndex < progress.length - 1 ? (
                progIndex > 0 ? (
                  <div className="flex w-full justify-between">
                    <Button
                      disabled={laodingInput}
                      onClick={() => {
                        setProgIndex((prev) => {
                          if (prev > 0) return prev - 1;
                          return 0;
                        });
                      }}
                    >
                      previous
                    </Button>
                    <Button
                      disabled={nextButtonDisable}
                      onClick={() => {
                        setProgIndex((prev) => {
                          const max = progress.length;
                          if (prev < max) return prev + 1;
                          return 0;
                        });
                      }}
                    >
                      Next
                    </Button>
                  </div>
                ) : (
                  <Button
                    disabled={nextButtonDisable}
                    onClick={() => {
                      setProgIndex((prev) => {
                        const max = progress.length;
                        if (prev < max) return prev + 1;
                        return 0;
                      });
                    }}
                  >
                    Next
                  </Button>
                )
              ) : (
                <div className="flex justify-between w-full">
                  <Button
                    disabled={laodingInput}
                    onClick={() => {
                      setProgIndex((prev) => {
                        if (prev > 0) return prev - 1;
                        return 0;
                      });
                    }}
                  >
                    previous
                  </Button>
                  <DialogTrigger asChild>
                    <Button variant="outline">Finish</Button>
                  </DialogTrigger>
                </div>
              )}
            </div>
          </CardFooter>
        </Card>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Creation</DialogTitle>
            <DialogDescription>
              {message ? (
                message
              ) : responseError ? (
                responseError
              ) : (
                <>
                  Are you sure you want to spend{" "}
                  <span className="dark:text-red-400 text-red-500">
                    ${cost}
                  </span>{" "}
                  to create <span className="font-semibold">{corpName}</span> ?
                </>
              )}
            </DialogDescription>
          </DialogHeader>
          <Button
            disabled={getCompaniesLoader}
            onClick={() => handleCreateCompany()}
          >
            Confirm
          </Button>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default Page;
