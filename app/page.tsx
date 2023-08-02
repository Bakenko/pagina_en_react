import OptionMenu from "@/components/OptionMenu";
import Button from "@/components/Button";
import Title from "@/components/TItle";
import Paragraph from "@/components/Paragraph";
import Image from "@/components/Image";
import DropdownList from "@/components/DropdownList";


export default function Home() {
  return (
    <main className="flex colum w_size_100">
      <header className='flex j_center w_size_100 h_size_70p background_black fixed'>
        <div className='flex a_center w_size_80 space_between h_size_100'>
          <div className='flex w_size_40 h_size_100'>
            <div className='flex w_size_100 a_center h_size_100'>
              <div className="flex a_center j_center">
                <Image 
                  src='https://images.contentstack.io/v3/assets/blt08c1239a7bff8ff5/bltb81e11ffb7512f4a/646666241514066ed7f31404/header-logo-mobile.svg'              
                  alt='icono'
                />
              </div>
              <OptionMenu option='Juegos' />
              <OptionMenu option='Cine' />
              <OptionMenu option='Industria' />
              <OptionMenu option='Comunidad' />
              <OptionMenu option='Recursos' />
              <OptionMenu option='Learn' />
            </div>
          </div>
          <div className='flex w_size_40 space_between a_center '>
            <Button 
              name='PLANES Y PRECIOS' 
              color='white'
              fColor='black' 
              colorBorder='3px solid rgb(33, 150, 243)' 
              radius='25px' 
            />
            <div>
              <button>
                search
              </button>
            </div>
            <div>
              <button>
                apps
              </button>
            </div>
            <div>
              <button>
                account_circle
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="flex j_center w_size_100 background_image_init">
        <div className="flex a_center w_size_80 padding_box">
          <div className="flex a_center w_size_80 j_center">
            <div className="flex colum space_between h_size_60 a_center">
              <Paragraph 
                color='white' 
                FSize='14px'
                text='UNITI PARA JUEGOS' 
              />
              <Title 
                color='white' 
                FSize='80px'
                text='CONTIGO DE LA GRAN IDEA AL ÉXITO' 
              />
              <Paragraph 
                color='white' 
                FSize='18px'
                text='Haz realidad tu visión con Create Solutions de Unity, que es líder en el sector, y haz crecer tu empresa con Operate Solutions, que funciona con cualquier motor de juego.' 
              />
              <div className="w_size_80">
                <Button 
                  name='Crea tu juego' 
                  color='white'
                  fColor='rgb(33, 150, 243)' 
                  colorBorder='3px solid rgb(33, 150, 243)' 
                  radius='8px' 
                />
                <Button 
                  name='Administra tu juego' 
                  color= 'white'
                  fColor='transparent'
                  colorBorder='3px solid white' 
                  radius='8px' 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex j_center w_size_100 h_size_70p background_black'>
        <div className='flex a_center w_size_80 space_between'>
          <div className='flex'>
            <div className='flex w_size_100 space_between'>
              <OptionMenu option='Infomración general' />
              <OptionMenu option='Opciones del plan' />
            </div>
          </div>
        </div>
      </section>
      <section className="flex j_center w_size_100">
        <div className="flex colum a_center w_size_80 h_size_100 j_center padding_div">
          <div className="flex">
            <Title
              color='black'
              FSize='40px'
              text='Soluciones para juegos'
            />
          </div>
          <div className="flex w_size_100 space_between">
            <div className="flex w_size_50 b_sizing">
              <div className="flex w_size_100 box_shadow">
                <a href="#" className="flex w_size_100">
                  <div className="flex w_size_100">
                    <div className="flex colum w_size_100">
                      <Image  
                      src='https://c4.wallpaperflare.com/wallpaper/337/147/721/guweiz-samurai-women-black-hair-fantasy-girl-hd-wallpaper-preview.jpg' 
                      alt='Warrior1'
                      />
                      <div className="flex colum w_size_80 a_center">
                        <Title 
                          color='black'
                          FSize='24px'
                          text='Crea tu juego'
                        />
                        <Paragraph 
                          color='black'
                          FSize='16px'
                          text='Haz realidad tu visión con las herramientas de Unity, que son líderes en la industria, para crear experiencias de juego increíbles y de alto rendimiento.'
                        />
                        <div>
                          <Button 
                            name='Más información' 
                            color='rgb(33, 150, 243)'
                            fColor='transparent'
                            colorBorder='none' 
                            radius='none'
                          />
                        </div>
                      </div>                              
                    </div>
                  </div>
                </a>        
              </div>
            </div>
            <div className="flex w_size_50 b_sizing">
              <div className="flex w_size_100 box_shadow">
                <a href="#" className="flex w_size_100">
                  <div className="flex w_size_100">
                    <div className="flex colum w_size_100">
                      <Image  
                        src='https://c4.wallpaperflare.com/wallpaper/172/903/756/guweiz-samurai-women-warrior-fantasy-girl-hd-wallpaper-preview.jpg' 
                        alt='Warrior2'
                      />
                      <div className="flex colum w_size_80 a_center">
                        <Title 
                          color='black'
                          FSize='24px'
                          text='Crea, administra y haz crecer tu juego'
                        />
                        <Paragraph 
                          color='black'
                          FSize='16px'
                          text='Desarrolla juegos multijugador y multiplataforma, administra operaciones en vivo y crea experiencias personalizadas para tus jugadores con los servicios para videojuegos de Unity.'
                        />
                        <div>
                        <Button 
                          name='Más información' 
                          color='rgb(33, 150, 243)'
                          fColor='transparent'
                          colorBorder='none' 
                          radius='none'
                          />
                        </div>                      
                      </div> 
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex j_center w_size_100 background_image_container">
        <div className="flex colum a_center w_size_80 h_size_100 j_center padding_div">
          <div className="flex colum">
            <Title
              color='white'
              FSize='40px'
              text='Nuestras opciones de plan'
            />
            <Paragraph 
              color='white'
              FSize='18'
              text='Más funcionalidad y recursos para potenciar tus juegos.'
            />
          </div>
          <div className="flex w_size_100 space_between">
            <div className="flex w_size_33 b_sizing">
              <div className="flex w_size_100 box_shadow background_white">
                <a href="#" className="flex w_size_100">
                  <div className="flex w_size_100">
                    <div className="flex colum w_size_100">
                      <Image  
                      src='https://c4.wallpaperflare.com/wallpaper/358/497/136/digital-art-women-samurai-warrior-wallpaper-preview.jpg' 
                      alt='Warrior3'
                      />
                      <div className="flex colum w_size_80 a_center">
                        <Title 
                          color='black'
                          FSize='24px'
                          text='Unity Plus'
                        />
                        <Paragraph 
                          color='black'
                          FSize='16px'
                          text='Los entusiastas serios y las empresas pequeñas obtienen más funcionalidad y recursos de capacitación para potenciar sus proyectos.'
                        />
                        <div>
                          <Button 
                            name='Más información' 
                            color='rgb(11, 97, 167)'
                            fColor='transparent'
                            colorBorder='none' 
                            radius='none'
                          />
                        </div>
                      </div>                              
                    </div>
                  </div>
                </a>        
              </div>
            </div>
            <div className="flex w_size_33 b_sizing">
              <div className="flex w_size_100 box_shadow background_white">
                <a href="#" className="flex w_size_100">
                  <div className="flex w_size_100">
                    <div className="flex colum w_size_100">
                      <Image  
                        src='https://c4.wallpaperflare.com/wallpaper/870/532/913/women-artwork-warrior-fantasy-art-wallpaper-preview.jpg' 
                        alt='Warrior4'
                      />
                      <div className="flex colum w_size_80 a_center">
                        <Title 
                          color='black'
                          FSize='24px'
                          text='Unity Pro'
                        />
                        <Paragraph 
                          color='black'
                          FSize='16px'
                          text='Descubre el potencial de tu equipo con herramientas profesionales para crear juegos en dispositivos y plataformas.'
                        />
                        <div>
                        <Button 
                          name='Más información' 
                          color='rgb(11, 97, 167)'
                          fColor='transparent'
                          colorBorder='none' 
                          radius='none'
                          />
                        </div>                      
                      </div> 
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex w_size_33 b_sizing">
              <div className="flex w_size_100 box_shadow background_white">
                <a href="#" className="flex w_size_100">
                  <div className="flex w_size_100">
                    <div className="flex colum w_size_100">
                      <Image  
                        src='https://c4.wallpaperflare.com/wallpaper/116/254/440/guweiz-samurai-women-warrior-fantasy-girl-hd-wallpaper-preview.jpg'
                        alt='Warrior5'
                      />
                      <div className="flex colum w_size_80 a_center">
                        <Title 
                          color='black'
                          FSize='24px'
                          text='Unity Enterprise'
                        />
                        <Paragraph 
                          color='black'
                          FSize='16px'
                          text='Administra complejos proyectos 3D en tiempo real con soporte experto y herramientas de creación que se pueden ampliar para equipos de cualquier tamaño.'
                        />
                        <div>
                        <Button 
                          name='Más información' 
                          color='rgb(11, 97, 167)'
                          fColor='transparent'
                          colorBorder='none' 
                          radius='none'
                          />
                        </div>                      
                      </div> 
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex j_center w_size_100">
        <div className="flex colum w_size_80 padding_div">
          <div className="flex">
            <Title 
              color='black'
              FSize='40px'
              text='El 50 % de los juegos para dispositivos se crearon con Unity'
            />
            <h1></h1>
          </div>
          <div className="flex box_logo padding_div">
            <div className="image_logo">
              <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/riot-360x192%401x.jpg?itok=4Uf4BmkS" alt="warrior3'
                alt='RIOT'
              />
            </div>
            <div className="image_logo">
              <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/respawn-entertainment-360x192%401x.jpg?itok=e-2TBTdk" alt="warrior4'
                alt='RESPAWN ENTERTAINMENT'
              />
            </div>
            <div className="image_logo">
              <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/505games-360x192%401x.jpg?itok=_qNKCJP6'
                alt='505 GAMES'
              />
            </div>
            <div className="image_logo">
              <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/hi-rez-360x192%401x.jpg?itok=C9oxG9gV'
                alt='HI-RES STUDIOS'
              />
            </div>
            <div className="image_logo">
            <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-11/uken%20games%20bw.jpg?itok=RWsKfA9f'
                alt='UKEN GAMES'
              />
            </div>
            <div className="image_logo">
            <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-11/Romero%20Games%20bw.jpg?itok=B9aXoUcj'
                alt='ROMERO GAMES'
              />
            </div>
            <div className="image_logo">
            <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/atari-360x192%401x.jpg?itok=NFO2Y8wV'
                alt='ATARI'
              />
            </div>
            <div className="image_logo">
            <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/madfinger-games-360x192%401x.jpg?itok=1hdgtiRg'
                alt='MADFINGER GAMES.COM'
              />
            </div>
            <div className="image_logo">
            <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/phoenixlabs-360x192%401x.jpg?itok=ljjlqYt1'
                alt='PHOENIX LABS'
              />
            </div>
            <div className="image_logo">
            <Image 
                src='https://unity.com/sites/default/files/styles/sponsor/public/2021-04/wooga-360x192%401x.jpg?itok=RdA8RvFe'
                alt='WOOGA'
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex j_center w_size_100">
        <div className="flex  a_center w_size_80 j_center padding_div">
          <div className="flex w_size_100 space_between">
            <div className="flex w_size_100">
              <div className="flex colum w_size_100 a_center b_sizing">
                <div className="flex colum w_size_100">
                  <Title 
                    color='black'
                    FSize='44px'
                    text='Unity Pro y Unity Enterprise evolucionaron'
                  />
                  <Paragraph 
                    color='black'
                    FSize='18px'
                    text='Los dos planes ahora incluirán Unity Mars y Havok Physics para Unity. Unity Enterprise ofrece soporte rápido, acceso al código fuente, versión del soporte a largo plazo (LTS) extendido y mucho más.'
                  />
                  <div className="w_size_100">
                    <Button 
                      name='Obtén más información sobre Unity Pro' 
                      color='white'
                      fColor='rgb(33, 150, 243)' 
                      colorBorder='3px solid rgb(33, 150, 243)' 
                      radius='8px' 
                    />
                    <Button 
                      name='Obtén más información sobre Unity Enterprise' 
                      color= 'rgb(33, 150, 243)'
                      fColor='transparent'
                      colorBorder='3px solid rgb(33, 150, 243)' 
                      radius='8px' 
                    />
                  </div>
                </div>
              </div>                                                
            </div>
            <div className="flex w_size_100 h_size_80 a_center">
              <div className="flex j_center box">
                <Image  
                  src='https://c4.wallpaperflare.com/wallpaper/707/429/112/women-fantasy-girl-brunette-tied-hair-profile-hd-wallpaper-preview.jpg' 
                  alt='Warrior1'
                  bRadius='8px'
                />
              </div>
            </div> 
          </div>
        </div>
      </section>
      <section className="flex j_center w_size_100">
        <div className="flex  a_center w_size_80 j_center padding_div">
          <div className="flex w_size_100 space_between">
          <div className="flex w_size_100 h_size_90 a_center">
              <div className="flex j_center">
                <Image  
                  src='https://c4.wallpaperflare.com/wallpaper/59/533/85/artwork-illustration-digital-art-women-brunette-hd-wallpaper-preview.jpg' 
                  alt='Warrior1'
                  bRadius='8px'
                />
              </div>
            </div> 
            <div className="flex w_size_100">
              <div className="flex colum w_size_100 a_center b_sizing">
                <div className="flex colum w_size_100">
                  <Title 
                    color='black'
                    FSize='44px'
                    text='Games Focus: La serie'
                  />
                  <Paragraph 
                    color='black'
                    FSize='18px'
                    text='En nuestra serie de blog Games Focus, los líderes y equipos de desarrolladores de diversas compañías comparten los proyectos en los que están trabajando, lo que tú puedes esperar de nosotros, y lo que eso significa para ti y tus proyectos.'
                  />
                  <div className="w_size_100">
                    <Button 
                      name='Más información' 
                      color='white'
                      fColor='rgb(33, 150, 243)' 
                      colorBorder='3px solid rgb(33, 150, 243)' 
                      radius='8px' 
                    />
                  </div>
                </div>
              </div>                                                
            </div>
          </div>
        </div>
      </section>
      <section className="flex j_center w_size_100">
        <div className="flex w_size_80 padding_div">
          <div className="flex w_size_100 background_image_box b_sizing box_style" >
            <div className="flex colum j_center w_size_70 box_information">
              <Title 
                color='white'
                FSize='40px'
                text='Crea y crece con Unity'
              />
              <Paragraph 
                color='white'
                FSize='18px'
                text='Unity es el motor de videojuegos líder del sector y mucho más. Descubre soluciones que te ayudarán en cada etapa del ciclo de vida del desarrollo del juego: de una gran idea a un éxito rotundo.'
              />
              <div className="w_size_100">
                <Button 
                  name='Más información' 
                  color='white'
                  fColor='rgb(33, 150, 243)' 
                  colorBorder='3px solid rgb(33, 150, 243)' 
                  radius='8px' 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex j_center w_size_100 background_black">
        <div className="flex colum j_center a_center w_size_80">
          <div className="flex w_size_100 space_between a_center padding_div">
            <div className="flex colum w_size_50">
              <div className="flex">
                <Title 
                  color='white'
                  FSize='16px'
                  text='Idioma'
                />
              </div>
              <div className="flex box_logo w_size_80">
                <div className="language">
                  <Paragraph
                      color='rgb(153, 153, 153)'
                      FSize='14px'
                      text='English'
                  />
                </div>
                <div className="language">
                  <Paragraph
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='Deutsch'
                  />
                </div>
                <div className="language">
                  <Paragraph
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='日本語'
                  />
                </div>
                <div className="language">
                  <Paragraph
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='Français'
                  />
                </div>
                <div className="language">
                  <Paragraph 
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='Português'
                  />
                </div>
                <div className="language">
                  <Paragraph
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='中文'
                  />
                </div>
                <div className="language">
                  <Paragraph 
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='Español'
                  />
                </div>
                <div className="language">
                  <Paragraph 
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='Русский'
                  />
                </div>
                <div className="language">
                  <Paragraph 
                    color='rgb(153, 153, 153)'
                    FSize='14px'
                    text='한국어'
                  />     
                </div>
              </div>                
            </div>
            <div className="flex colum w_size_25">
              <div className="flex">
              <Title 
                  color='white'
                  FSize='16px'
                  text='Redes sociales'
                />
              </div>
              <div className="flex box_logo">
                <div>
                  <button>
                    smart_display
                  </button>
                </div>
                <div>
                  <button>
                    group
                  </button>
                </div>
                <div>
                  <button>
                    rocket_launch
                  </button>
                </div>
                <div>
                  <button>
                    share
                  </button>
                </div>
                <div>
                  <button>
                    public
                  </button>
                </div>
              </div>
            </div>
            <div className="flex colum w_size_25">
              <div className="flex box_information">
              <Title 
                  color='white'
                  FSize='16px'
                  text='Currency'
                />
              </div>
              <div className="flex box_information">
                  <DropdownList 
                    Fsize='12px'
                  />
              </div>
            </div>
          </div>
          <div>
            <hr></hr>
          </div>
          <div className="flex w_size_100 space_between padding_div">
            <div>
              <a href="#">
                <h3>Comprar</h3>
              </a>
              <ul>
                <a href="#">
                  <li>Productos</li>
                </a>
                <a href="#">
                  <li>Unity Ads</li>
                </a>
                <br></br>
                <a href="#">
                  <li>Suscripción</li>
                </a>
                <a href="#">
                  <li>Asset Store</li>
                </a>
                <a href="#">
                  <li>Revendedores</li>
                </a>
              </ul>
            </div>
            <div>
              <a href="#">
                <h3>Educación</h3>
              </a>          
              <ul>
                <a href="#">
                  <li>Estudiantes</li>
                </a>
                <a href="#">
                  <li>Docentes</li>
                </a>
                <a href="#">
                  <li>Certificación</li>
                </a>
                <a href="#">
                  <li>Averiguar</li>
                </a>
                <a href="#">
                  <li>Centro de excelencia</li>
                </a>
              </ul>
            </div>
            <div>
              <a href="">
                <h3>Descargar</h3>
              </a>
              <ul>
                <a href="#">
                  <li>Obtener Unity</li>
                </a>
                <a href="#">
                  <li>Descargar archivo</li>
                </a>
                <a href="#">
                  <li>Programa beta</li>
                </a>
              </ul>
            </div>
            <div>
              <a href="">
                <h3>Unity Labs</h3>
              </a>          
              <ul>
                <a href="#">
                  <li>Labs</li>
                </a>
                <a href="#">
                  <li>Publicaciones</li>
                </a>
              </ul>
            </div>
            <div>
              <a href="">
                <h3>Recursos</h3>
              </a>          
              <ul>
                <a href="#">
                  <li>Plataforma Learn</li>
                </a>
                <a href="#">
                  <li>Comunidad</li>
                </a>
                <a href="#">
                  <li>Documentación</li>
                </a>
                <a href="#">
                  <li>Preguntas y respuestas Unity</li>
                </a>
                <a href="#">
                  <li>Preguntas frecuentes</li>
                </a>
                <a href="#">
                  <li>Estado del servicio</li>
                </a>
                <a href="#">
                  <li>Casos de estudio</li>
                </a>
                <a href="#">
                  <li>Made with Unity</li>
                </a>
              </ul>
            </div>
            <div>
              <a href="">
                <h3>Unity</h3>
              </a> 
              <ul>
                <a href="#">
                  <li>Nuestra empresa</li>
                </a>
                <a href="#">
                  <li>Marca</li>
                </a>
                <a href="#">
                  <li>Boletín</li>
                </a>
                <a href="#">
                  <li>Blog</li>
                </a>
                <a href="#">
                  <li>Eventos</li>
                </a>
                <a href="#">
                  <li>Carreras</li>
                </a>
                <a href="#">
                  <li>Ayuda</li>
                </a>
                <a href="#">
                  <li>Prensa</li>
                </a>
                <a href="#">
                  <li>Socios</li>
                </a>
                <a href="#">
                  <li>Inversionistas</li>
                </a>
                <a href="#">
                  <li>Afiliados</li>
                </a>
                <a href="#">
                  <li>Seguridad</li>
                </a>
                <a href="#">
                  <li>Impacto social</li>
                </a>
                <a href="#">
                  <li>Inclusion & Diversity</li>
                </a>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p>Copyright © 2023 Unity Technologies</p>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
                <li>
                  <a href="#">Do Not Sell or Share My Personal Information</a>
                </li>
                <li>
                  <a href="#">Configuración de Cookies</a>
                </li>
              </ul>
            </div>
            <br></br>
            <div>
              <p>Unity, los logotipos de Unity y otras marcas comerciales de Unity son marcas comerciales o marcas comerciales registradas de Unity Technologies o de sus empresas afiliadas en los Estados Unidos y el resto del mundo (<span class="style_link_footer">más información aquí</span>). Los demás nombres o marcas son marcas comerciales de sus respectivos propietarios.</p>
            </div>
          </div>
        </div>
      </footer>
      {/*
      <section>
        <div>
          <button>
            support_agent
          </button>
        </div>
      </section>
      <section>
        <div>
          <div>
            <div>
              <p>Al hacer clic en “Aceptar todas las cookies”, usted acepta que las cookies se guarden en su dispositivo para mejorar la navegación del sitio, analizar el uso del mismo, y colaborar con nuestros estudios para marketing.</p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>Configuración de cookies</p>
              </div>
              <div>
                <button>Aceptar todas las cookies</button>
              </div>
              <div>
                <button>Close</button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}
