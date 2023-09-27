<?php

namespace App\Repository;

use App\Entity\MovieWanted;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MovieWanted>
 *
 * @method MovieWanted|null find($id, $lockMode = null, $lockVersion = null)
 * @method MovieWanted|null findOneBy(array $criteria, array $orderBy = null)
 * @method MovieWanted[]    findAll()
 * @method MovieWanted[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MovieWantedRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MovieWanted::class);
    }

//    /**
//     * @return MovieWanted[] Returns an array of MovieWanted objects
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

//    public function findOneBySomeField($value): ?MovieWanted
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
