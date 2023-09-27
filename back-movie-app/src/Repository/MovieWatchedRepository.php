<?php

namespace App\Repository;

use App\Entity\MovieWatched;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MovieWatched>
 *
 * @method MovieWatched|null find($id, $lockMode = null, $lockVersion = null)
 * @method MovieWatched|null findOneBy(array $criteria, array $orderBy = null)
 * @method MovieWatched[]    findAll()
 * @method MovieWatched[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MovieWatchedRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MovieWatched::class);
    }

//    /**
//     * @return MovieWatched[] Returns an array of MovieWatched objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MovieWatched
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
