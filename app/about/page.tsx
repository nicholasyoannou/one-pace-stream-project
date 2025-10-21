import Image from "next/image";
import NavMenu from "../navMenu";
import clsx from "clsx";
import Link from "next/link";
import * as globals from "../globals";
import Footer from "../footer";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-neutral-900 flex flex-col items-stretch">
        <div className="bg-neutral-900 flex w-full flex-col px-1 max-md:max-w-full">
          <div className="flex-col overflow-hidden self-stretch relative flex min-h-[485px] w-full items-stretch pt-3.5 max-md:max-w-full">
            <Image
              loading="lazy"
              alt="One Piece Going Merry"
              src="/landing/goingmerry.png"
              width={1920}
              height={1080}
              className="absolute opacity-30 h-full w-full object-cover object-center inset-0"
            />

            <div className="absolute pt-[500px] w-full bg-gradient-to-b from-transparent to-neutral-900"></div>
            <div className="absolute h-full w-full inset-0 bg-gradient-to-t from-transparent to-neutral-900">
              <div className="relative flex self-center items-center text-center flex-col px-14">
                <NavMenu />
                <div
                  className={clsx(
                    "text-white text-6xl py-24 font-extrabold drop-shadow-xl uppercase whitespace-nowrap",
                    globals.headinglanding.className
                  )}
                >
                  About One Pace: Stream project
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-900 h-auto">
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <p className="pt-20 pb-1 opacity-80 italic text-white text-base">
                [Last updated at 2:23GMT 06/12/2023]
              </p>
              <div
                className={
                  "text-white text-2xl font-bold uppercase whitespace-nowrap"
                }
              >
                What is One Pace: Stream project?
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                One Pace: Stream project is a project that officially went into
                development on the 3rd December 2023, and it aims to bring back
                the One Pace experience to the web. One Pace is a fan-made
                project that edits the One Piece anime to follow the manga more
                closely cutting out filler, padding, and censoring. More
                information about One Pace can be found on{" "}
                <Link className="hover:underline" href={"https://onepace.net"}>
                  their website
                </Link>
                . One Pace used to have an online streaming service, but it was
                shut down, due to various problems. This project aims to
                bring that experience back. As Crunchyroll owns the licenses for
                One Piece, and One Pace is a cut down version of that, it would
                make sense to be able to watch both.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-2xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Won't this project suffer the same fate as the original?
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                I'd like to think that this time it's different. The original
                allowed anyone and everyone to access it, which, if this was
                Nyaa, would make sense. However, this time it's different. You
                need a paid, Crunchyroll Premium subscription to access it, as
                you need to pay for One Piece in the first place. This brings
                about a load of questions: are you in collaboration with
                Crunchyroll? And that answer is no, because Sony doesn't partner
                with these kinds of projects it seems. Wish someone from Sony would
                literally drop me an email but sadly it doesn't seem that way. I
                tried popping them an email but to no avail.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-2xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Who's building the project?
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                I'll fill this in later and other areas of the site with proper
                info, but for now, it's just me. I'm a peep.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={
                  "text-white text-2xl pt-6 font-bold uppercase whitespace-nowrap"
                }
              >
                Why are you building this project?
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                Warning- a lot of rambling- One Pace surprised me. I saw the 1,000 episode count on One
                Piece and just immediately imagined myself rewatching Black
                Clover over 3 times (which was, if you're interested, me
                attempting to picture Asta's loud voice after nearly a year of
                not watching it). So I left the anime for a long time, just
                watching all the other stuff I loved. Mushoku Tensei S2 somehow
                ended up being a slice of life, and then I just felt like
                experimenting with new anime. At one point in time, a peep at my
                universities anime society recommended One Pace to me which was
                a cut down version, and that really fixed what One Piece had
                problems with. I watched a few episodes of the original One
                Piece on Crunchyroll: it's old. It's like the anime itself is
                telling you you're in the wrong era- Anyway, long story short, boy
                was I wrong about One Piece. The way One Pace started the anime
                and fixed arcs in a very particular way, I loved it. Of course,
                sometimes arcs drag on, etc, but hey, it's an adventure anime
                where things constantly happen (I'm not even going to start
                ranting about Rise of the Sword Hero, who knew 'Somethings
                rising and it's not the shield hero' would be relevant even when
                S2 is ongoing). I contacted Crunchyroll to see if One Pace could
                get a collab and as a result One Pace banned me off their
                Discord (I didn't know One Pace's past, I just jumped into it as
                I was like 'heck yea, good anime'). And as they suspected, they
                didn't respond to my email. Which kinda made me want to build
                this even more. Who knows what it takes for them to get in
                touch. I'm not a big fan of monopolies not being challenged or
                not even taking their own users' feedback to their platform.
                We're paying for anime - for goodness sake, why can't we see
                more collabs with community projects?
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={"text-white text-2xl pt-6 font-bold uppercase px-16"}
              >
                Damn I didn't realise people still wrote life stories. Anyway,
                what do you gain from this? Surely there's some perk to it.
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                I would insert a One Piece meme here but I'm afraid it might
                give spoilers to non-watchers so I just won't. Answering the
                question, absolutely nothing. If you want me to say specifically
                what did it for me is probably seeing the end of the Water Seven
                arc & some parts from Eines Lobby. It's more the buildup that
                One Piece creates over time it gets more fun to watch. So,
                answering the question, I get the joy of allowing other people
                to watch it. Oh and also probably making a popup to more people
                to donate to One Pace so arcs can be created faster, probably.
                Not the reason I'm creating this, just waffling on a 2am brain.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={"text-white text-2xl pt-6 font-bold uppercase px-16"}
              >
                Just read the Terms and Conditions. Why is most of your content
                stored in Japan?
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                Persona 5, that's it. Really loved playing the franchise and
                Persona 5 out of all was brilliant, plus One Piece is made in
                Japan anyway, just thought it was relevant. Mainly for the
                reason of Persona being based in Tokyo though.
              </div>
            </div>
            <div
              className={clsx(
                "flex flex-col items-center justify-center text-center",
                globals.headinglanding.className
              )}
            >
              <div
                className={"text-white text-2xl pt-6 font-bold uppercase px-16"}
              >
                I'm a One Pace developer.
              </div>
              <div className={"text-white text-base pt-2 px-40"}>
                I wanted to make this project to
                make One Pace more accessible and I want to say that I did what
                I could to help out. This whole project on here was coded by me,
                apart from the libraries used. I'm not a professional web dev,
                so most of this I was picking it up as I coded it.
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}
