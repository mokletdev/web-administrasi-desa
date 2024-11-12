import { getServerSession } from "@/lib/next-auth";
import prisma from "@/lib/prisma";
import { DivisionLevel, Official, Position, User } from "@prisma/client";
import { OfficialTable } from "./components/official-table";

const getDivisionLevel = (user: User): DivisionLevel => {
  if (user.cityId) return "CITY";
  if (user.districtId) return "DISTRICT";
  else return "SUBDISTRICT";
};

export default async function OfficialManagement() {
  const user = await getServerSession();
  const tryGetUser = await prisma.user.findUnique({
    where: {
      id: user?.user?.id,
    },
  });

  const divisionLevel = getDivisionLevel(tryGetUser!);
  let res: ({ officials: Official[] } & Position)[] = [];

  if (
    tryGetUser?.cityId ||
    tryGetUser?.districtId ||
    tryGetUser?.subDistrictId
  ) {
    res = await prisma.position.findMany({
      where: {
        level: divisionLevel,
        officials: {
          every: {
            user: {
              cityId: divisionLevel === "CITY" ? tryGetUser?.cityId : null,
              districtId:
                divisionLevel === "DISTRICT" ? tryGetUser?.districtId : null,
              subDistrictId:
                divisionLevel === "SUBDISTRICT"
                  ? tryGetUser?.subDistrictId
                  : null,
            },
          },
        },
      },
      include: {
        officials: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  const officials = await prisma.user.findMany({
    where: {
      cityId: divisionLevel === "CITY" ? tryGetUser?.cityId : null,
      districtId: divisionLevel === "DISTRICT" ? tryGetUser?.districtId : null,
      subDistrictId:
        divisionLevel === "SUBDISTRICT" ? tryGetUser?.subDistrictId : null,
    },
    include: {
      official: true,
    },
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <h1>Manajemen Pejabat</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
          necessitatibus corporis debitis praesentium unde assumenda itaque ipsa
          earum ipsum tempore!
        </p>
      </div>
      <OfficialTable
        positions={
          res as unknown as ({
            officials: ((Official & { user: User }) & { user: User })[];
          } & Position)[]
        }
        officials={officials as unknown as ({ official: Official } & User)[]}
      />
    </>
  );
}
