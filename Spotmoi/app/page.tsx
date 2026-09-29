import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans
    ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex">
			<div className="flex-1 p-3">
				<h3 className="text-xl font-bold">Ajouter un artiste</h3>
				<input type="text" name="artist" placeholder="Nana Mouskouri" className="lightInput my-2" />
				<input type="submit" value="Rechercher" className="lightButton" />
			</div>
			<div className="flex-3 p-3 text-center">
				<h2 className="text-2xl font-bold">Vos artistes</h2>
				<div className="flex flex-wrap mt-2">
					<div className="basis-1/3">
						<div className="m-1 p-1 artist">
							<h4>NOM DE L'ARTISTE</h4>
							<img src="images/bust.png" alt="NOM DE L'ARTISTE" />
							<a><button className="lightButton mt-1 mr-1">Concerts</button></a>
							<a><button className="lightButton mt-1">Albums</button></a>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-2">
					<button className="lightButton">Vider les favoris</button>
				</div>
			</div>
		</div>
      </main>
    </div>
  );
}
